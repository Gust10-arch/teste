from rest_framework import status
from rest_framework.test import APITestCase


class AuthenticationApiTests(APITestCase):
    register_url = "/api/v1/auth/users/"
    login_url = "/api/v1/auth/jwt/create/"
    refresh_url = "/api/v1/auth/jwt/refresh/"
    me_url = "/api/v1/auth/users/me/"

    def setUp(self):
        self.credentials = {
            "email": "estudante@example.com",
            "password": "UmaSenhaForte123!",
            "re_password": "UmaSenhaForte123!",
        }

    def test_health_check(self):
        response = self.client.get("/api/v1/health/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()["status"], "ok")

    def test_user_can_register_login_access_me_and_refresh(self):
        register_response = self.client.post(self.register_url, self.credentials, format="json")
        self.assertEqual(register_response.status_code, status.HTTP_201_CREATED)

        login_response = self.client.post(
            self.login_url,
            {"email": self.credentials["email"], "password": self.credentials["password"]},
            format="json",
        )
        self.assertEqual(login_response.status_code, status.HTTP_200_OK)
        self.assertIn("access", login_response.data)
        self.assertIn("refresh", login_response.data)

        access_token = login_response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION=f"JWT {access_token}")
        me_response = self.client.get(self.me_url)
        self.assertEqual(me_response.status_code, status.HTTP_200_OK)
        self.assertEqual(me_response.data["email"], self.credentials["email"])

        refresh_response = self.client.post(
            self.refresh_url,
            {"refresh": login_response.data["refresh"]},
            format="json",
        )
        self.assertEqual(refresh_response.status_code, status.HTTP_200_OK)
        self.assertIn("access", refresh_response.data)
        self.assertIn("refresh", refresh_response.data)

    def test_me_requires_authentication(self):
        response = self.client.get(self.me_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
