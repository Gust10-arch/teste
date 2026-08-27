const elementsData = [
    {n:1,s:"H",o:"1s¹",name:"Hidrogênio",c:1,r:1,cat:"reactive-nonmetal", b:"b-s", desc:"O hidrogênio é o elemento mais comum no universo, representando cerca de 75% da massa dele."},
    {n:2,s:"He",o:"1s²",name:"Hélio",c:18,r:1,cat:"noble-gas", b:"b-s", desc:"Usado em balões e ressonância magnética."},
    {n:3,s:"Li",o:"2s¹",name:"Lítio",c:1,r:2,cat:"alkali-metal", b:"b-s", desc:"Metal leve usado em baterias."},
    {n:4,s:"Be",o:"2s²",name:"Berílio",c:2,r:2,cat:"alkaline-earth-metal", b:"b-s"},
    {n:5,s:"B",o:"2p¹",name:"Boro",c:13,r:2,cat:"metalloid", b:"b-p"},
    {n:6,s:"C",o:"2p²",name:"Carbono",c:14,r:2,cat:"reactive-nonmetal", b:"b-p"},
    {n:7,s:"N",o:"2p³",name:"Nitrogênio",c:15,r:2,cat:"reactive-nonmetal", b:"b-p"},
    {n:8,s:"O",o:"2p⁴",name:"Oxigênio",c:16,r:2,cat:"reactive-nonmetal", b:"b-p"},
    {n:9,s:"F",o:"2p⁵",name:"Flúor",c:17,r:2,cat:"reactive-nonmetal", b:"b-p"},
    {n:10,s:"Ne",o:"2p⁶",name:"Neônio",c:18,r:2,cat:"noble-gas", b:"b-p"},
    {n:11,s:"Na",o:"3s¹",name:"Sódio",c:1,r:3,cat:"alkali-metal", b:"b-s"},
    {n:12,s:"Mg",o:"3s²",name:"Magnésio",c:2,r:3,cat:"alkaline-earth-metal", b:"b-s"},
    {n:13,s:"Al",o:"3p¹",name:"Alumínio",c:13,r:3,cat:"post-transition-metal", b:"b-p"},
    {n:14,s:"Si",o:"3p²",name:"Silício",c:14,r:3,cat:"metalloid", b:"b-p"},
    {n:15,s:"P",o:"3p³",name:"Fósforo",c:15,r:3,cat:"reactive-nonmetal", b:"b-p"},
    {n:16,s:"S",o:"3p⁴",name:"Enxofre",c:16,r:3,cat:"reactive-nonmetal", b:"b-p"},
    {n:17,s:"Cl",o:"3p⁵",name:"Cloro",c:17,r:3,cat:"reactive-nonmetal", b:"b-p"},
    {n:18,s:"Ar",o:"3p⁶",name:"Argônio",c:18,r:3,cat:"noble-gas", b:"b-p"},
    {n:19,s:"K",o:"4s¹",name:"Potássio",c:1,r:4,cat:"alkali-metal", b:"b-s"},
    {n:20,s:"Ca",o:"4s²",name:"Cálcio",c:2,r:4,cat:"alkaline-earth-metal", b:"b-s"},
    {n:21,s:"Sc",o:"3d¹",name:"Escândio",c:3,r:4,cat:"transition-metal", b:"b-d"},
    {n:22,s:"Ti",o:"3d²",name:"Titânio",c:4,r:4,cat:"transition-metal", b:"b-d"},
    {n:23,s:"V",o:"3d³",name:"Vanádio",c:5,r:4,cat:"transition-metal", b:"b-d"},
    {n:24,s:"Cr",o:"3d⁵",name:"Cromo",c:6,r:4,cat:"transition-metal", b:"b-d"},
    {n:25,s:"Mn",o:"3d⁵",name:"Manganês",c:7,r:4,cat:"transition-metal", b:"b-d"},
    {n:26,s:"Fe",o:"3d⁶",name:"Ferro",c:8,r:4,cat:"transition-metal", b:"b-d"},
    {n:27,s:"Co",o:"3d⁷",name:"Cobalto",c:9,r:4,cat:"transition-metal", b:"b-d"},
    {n:28,s:"Ni",o:"3d⁸",name:"Níquel",c:10,r:4,cat:"transition-metal", b:"b-d"},
    {n:29,s:"Cu",o:"3d¹⁰",name:"Cobre",c:11,r:4,cat:"transition-metal", b:"b-d"},
    {n:30,s:"Zn",o:"3d¹⁰",name:"Zinco",c:12,r:4,cat:"transition-metal", b:"b-d"},
    {n:31,s:"Ga",o:"4p¹",name:"Gálio",c:13,r:4,cat:"post-transition-metal", b:"b-p"},
    {n:32,s:"Ge",o:"4p²",name:"Germânio",c:14,r:4,cat:"metalloid", b:"b-p"},
    {n:33,s:"As",o:"4p³",name:"Arsênio",c:15,r:4,cat:"metalloid", b:"b-p"},
    {n:34,s:"Se",o:"4p⁴",name:"Selênio",c:16,r:4,cat:"reactive-nonmetal", b:"b-p"},
    {n:35,s:"Br",o:"4p⁵",name:"Bromo",c:17,r:4,cat:"reactive-nonmetal", b:"b-p"},
    {n:36,s:"Kr",o:"4p⁶",name:"Criptônio",c:18,r:4,cat:"noble-gas", b:"b-p"},
    {n:37,s:"Rb",o:"5s¹",name:"Rubídio",c:1,r:5,cat:"alkali-metal", b:"b-s"},
    {n:38,s:"Sr",o:"5s²",name:"Estrôncio",c:2,r:5,cat:"alkaline-earth-metal", b:"b-s"},
    {n:39,s:"Y",o:"4d¹",name:"Ítrio",c:3,r:5,cat:"transition-metal", b:"b-d"},
    {n:40,s:"Zr",o:"4d²",name:"Zircônio",c:4,r:5,cat:"transition-metal", b:"b-d"},
    {n:41,s:"Nb",o:"4d⁴",name:"Nióbio",c:5,r:5,cat:"transition-metal", b:"b-d"},
    {n:42,s:"Mo",o:"4d⁵",name:"Molibdênio",c:6,r:5,cat:"transition-metal", b:"b-d"},
    {n:43,s:"Tc",o:"4d⁵",name:"Tecnécio",c:7,r:5,cat:"transition-metal", b:"b-d"},
    {n:44,s:"Ru",o:"4d⁷",name:"Rutênio",c:8,r:5,cat:"transition-metal", b:"b-d"},
    {n:45,s:"Rh",o:"4d⁸",name:"Ródio",c:9,r:5,cat:"transition-metal", b:"b-d"},
    {n:46,s:"Pd",o:"4d¹⁰",name:"Paládio",c:10,r:5,cat:"transition-metal", b:"b-d"},
    {n:47,s:"Ag",o:"4d¹⁰",name:"Prata",c:11,r:5,cat:"transition-metal", b:"b-d"},
    {n:48,s:"Cd",o:"4d¹⁰",name:"Cádmio",c:12,r:5,cat:"transition-metal", b:"b-d"},
    {n:49,s:"In",o:"5p¹",name:"Índio",c:13,r:5,cat:"post-transition-metal", b:"b-p"},
    {n:50,s:"Sn",o:"5p²",name:"Estanho",c:14,r:5,cat:"post-transition-metal", b:"b-p"},
    {n:51,s:"Sb",o:"5p³",name:"Antimônio",c:15,r:5,cat:"metalloid", b:"b-p"},
    {n:52,s:"Te",o:"5p⁴",name:"Telúrio",c:16,r:5,cat:"metalloid", b:"b-p"},
    {n:53,s:"I",o:"5p⁵",name:"Iodo",c:17,r:5,cat:"reactive-nonmetal", b:"b-p"},
    {n:54,s:"Xe",o:"5p⁶",name:"Xenônio",c:18,r:5,cat:"noble-gas", b:"b-p"},
    {n:55,s:"Cs",o:"6s¹",name:"Césio",c:1,r:6,cat:"alkali-metal", b:"b-s"},
    {n:56,s:"Ba",o:"6s²",name:"Bário",c:2,r:6,cat:"alkaline-earth-metal", b:"b-s"},
    {n:72,s:"Hf",o:"5d²",name:"Háfnio",c:4,r:6,cat:"transition-metal", b:"b-d"},
    {n:73,s:"Ta",o:"5d³",name:"Tântalo",c:5,r:6,cat:"transition-metal", b:"b-d"},
    {n:74,s:"W",o:"5d⁴",name:"Tungstênio",c:6,r:6,cat:"transition-metal", b:"b-d"},
    {n:75,s:"Re",o:"5d⁵",name:"Rênio",c:7,r:6,cat:"transition-metal", b:"b-d"},
    {n:76,s:"Os",o:"5d⁶",name:"Ósmio",c:8,r:6,cat:"transition-metal", b:"b-d"},
    {n:77,s:"Ir",o:"5d⁷",name:"Irídio",c:9,r:6,cat:"transition-metal", b:"b-d"},
    {n:78,s:"Pt",o:"5d⁹",name:"Platina",c:10,r:6,cat:"transition-metal", b:"b-d"},
    {n:79,s:"Au",o:"5d¹⁰",name:"Ouro",c:11,r:6,cat:"transition-metal", b:"b-d"},
    {n:80,s:"Hg",o:"5d¹⁰",name:"Mercúrio",c:12,r:6,cat:"transition-metal", b:"b-d"},
    {n:81,s:"Tl",o:"6p¹",name:"Tálio",c:13,r:6,cat:"post-transition-metal", b:"b-p"},
    {n:82,s:"Pb",o:"6p²",name:"Chumbo",c:14,r:6,cat:"post-transition-metal", b:"b-p"},
    {n:83,s:"Bi",o:"6p³",name:"Bismuto",c:15,r:6,cat:"post-transition-metal", b:"b-p"},
    {n:84,s:"Po",o:"6p⁴",name:"Polônio",c:16,r:6,cat:"post-transition-metal", b:"b-p"},
    {n:85,s:"At",o:"6p⁵",name:"Astato",c:17,r:6,cat:"metalloid", b:"b-p"},
    {n:86,s:"Rn",o:"6p⁶",name:"Radônio",c:18,r:6,cat:"noble-gas", b:"b-p"},
    {n:87,s:"Fr",o:"7s¹",name:"Frâncio",c:1,r:7,cat:"alkali-metal", b:"b-s"},
    {n:88,s:"Ra",o:"7s²",name:"Rádio",c:2,r:7,cat:"alkaline-earth-metal", b:"b-s"},
    {n:104,s:"Rf",o:"6d²",name:"Rutherfórdio",c:4,r:7,cat:"transition-metal", b:"b-d"},
    {n:105,s:"Db",o:"6d³",name:"Dúbnio",c:5,r:7,cat:"transition-metal", b:"b-d"},
    {n:106,s:"Sg",o:"6d⁴",name:"Seabórgio",c:6,r:7,cat:"transition-metal", b:"b-d"},
    {n:107,s:"Bh",o:"6d⁵",name:"Bóhrio",c:7,r:7,cat:"transition-metal", b:"b-d"},
    {n:108,s:"Hs",o:"6d⁶",name:"Hássio",c:8,r:7,cat:"transition-metal", b:"b-d"},
    {n:109,s:"Mt",o:"6d⁷",name:"Meitnério",c:9,r:7,cat:"unknown", b:"b-d"},
    {n:110,s:"Ds",o:"6d⁹",name:"Darmstádtio",c:10,r:7,cat:"unknown", b:"b-d"},
    {n:111,s:"Rg",o:"6d¹⁰",name:"Roentgênio",c:11,r:7,cat:"unknown", b:"b-d"},
    {n:112,s:"Cn",o:"6d¹⁰",name:"Copernício",c:12,r:7,cat:"transition-metal", b:"b-d"},
    {n:113,s:"Nh",o:"7p¹",name:"Niônio",c:13,r:7,cat:"unknown", b:"b-p"},
    {n:114,s:"Fl",o:"7p²",name:"Fleróvio",c:14,r:7,cat:"unknown", b:"b-p"},
    {n:115,s:"Mc",o:"7p³",name:"Moscóvio",c:15,r:7,cat:"unknown", b:"b-p"},
    {n:116,s:"Lv",o:"7p⁴",name:"Livermório",c:16,r:7,cat:"unknown", b:"b-p"},
    {n:117,s:"Ts",o:"7p⁵",name:"Tennesso",c:17,r:7,cat:"unknown", b:"b-p"},
    {n:118,s:"Og",o:"7p⁶",name:"Oganessônio",c:18,r:7,cat:"noble-gas", b:"b-p"},
    {n:57,s:"La",o:"5d¹",name:"Lantânio",c:4,r:9,cat:"lanthanide", b:"b-f"},
    {n:58,s:"Ce",o:"4f¹",name:"Cério",c:5,r:9,cat:"lanthanide", b:"b-f"},
    {n:59,s:"Pr",o:"4f³",name:"Praseodímio",c:6,r:9,cat:"lanthanide", b:"b-f"},
    {n:60,s:"Nd",o:"4f⁴",name:"Neodímio",c:7,r:9,cat:"lanthanide", b:"b-f"},
    {n:61,s:"Pm",o:"4f⁵",name:"Promécio",c:8,r:9,cat:"lanthanide", b:"b-f"},
    {n:62,s:"Sm",o:"4f⁶",name:"Samário",c:9,r:9,cat:"lanthanide", b:"b-f"},
    {n:63,s:"Eu",o:"4f⁷",name:"Európio",c:10,r:9,cat:"lanthanide", b:"b-f"},
    {n:64,s:"Gd",o:"4f⁷",name:"Gadolínio",c:11,r:9,cat:"lanthanide", b:"b-f"},
    {n:65,s:"Tb",o:"4f⁹",name:"Térbio",c:12,r:9,cat:"lanthanide", b:"b-f"},
    {n:66,s:"Dy",o:"4f¹⁰",name:"Disprósio",c:13,r:9,cat:"lanthanide", b:"b-f"},
    {n:67,s:"Ho",o:"4f¹¹",name:"Hólmio",c:14,r:9,cat:"lanthanide", b:"b-f"},
    {n:68,s:"Er",o:"4f¹²",name:"Érbio",c:15,r:9,cat:"lanthanide", b:"b-f"},
    {n:69,s:"Tm",o:"4f¹³",name:"Túlio",c:16,r:9,cat:"lanthanide", b:"b-f"},
    {n:70,s:"Yb",o:"4f¹⁴",name:"Itérbio",c:17,r:9,cat:"lanthanide", b:"b-f"},
    {n:71,s:"Lu",o:"4f¹⁴",name:"Lutécio",c:18,r:9,cat:"lanthanide", b:"b-f"},
    {n:89,s:"Ac",o:"6d¹",name:"Actínio",c:4,r:10,cat:"actinide", b:"b-f"},
    {n:90,s:"Th",o:"6d²",name:"Tório",c:5,r:10,cat:"actinide", b:"b-f"},
    {n:91,s:"Pa",o:"5f²",name:"Protactínio",c:6,r:10,cat:"actinide", b:"b-f"},
    {n:92,s:"U",o:"5f³",name:"Urânio",c:7,r:10,cat:"actinide", b:"b-f"},
    {n:93,s:"Np",o:"5f⁴",name:"Netúnio",c:8,r:10,cat:"actinide", b:"b-f"},
    {n:94,s:"Pu",o:"5f⁶",name:"Plutônio",c:9,r:10,cat:"actinide", b:"b-f"},
    {n:95,s:"Am",o:"5f⁷",name:"Amerício",c:10,r:10,cat:"actinide", b:"b-f"},
    {n:96,s:"Cm",o:"5f⁷",name:"Cúrio",c:11,r:10,cat:"actinide", b:"b-f"},
    {n:97,s:"Bk",o:"5f⁹",name:"Berquélio",c:12,r:10,cat:"actinide", b:"b-f"},
    {n:98,s:"Cf",o:"5f¹⁰",name:"Califórnio",c:13,r:10,cat:"actinide", b:"b-f"},
    {n:99,s:"Es",o:"5f¹¹",name:"Einstênio",c:14,r:10,cat:"actinide", b:"b-f"},
    {n:100,s:"Fm",o:"5f¹²",name:"Férmio",c:15,r:10,cat:"actinide", b:"b-f"},
    {n:101,s:"Md",o:"5f¹³",name:"Mendelévio",c:16,r:10,cat:"actinide", b:"b-f"},
    {n:102,s:"No",o:"5f¹⁴",name:"Nobélio",c:17,r:10,cat:"actinide", b:"b-f"},
    {n:103,s:"Lr",o:"5f¹⁴",name:"Laurêncio",c:18,r:10,cat:"actinide", b:"b-f"}
];

const container = document.getElementById('table');

function init() {
    elementsData.forEach(el => {
        const div = document.createElement('div');
        div.className = `element ${el.cat} ${el.b}`;
        div.style.gridColumn = el.c;
        div.style.gridRow = el.r;
        div.setAttribute('data-cat', el.cat);
        div.setAttribute('data-search', `${el.name} ${el.s}`.toLowerCase());
        
        div.innerHTML = `
            <div class="num">${el.n}</div>
            <div class="sym">${el.s}</div>
            <div class="orb">${el.o}</div>
            <div class="name">${el.name}</div>
        `;
        
        div.onclick = () => openModal(el);
        container.appendChild(div);
    });
}

function toggleOrbitals() {
    const table = document.getElementById('table');
    const btn = document.getElementById('orbBtn');
    const isOrbital = table.classList.toggle('orbital-mode');
    btn.innerText = isOrbital ? "Ver Símbolos" : "Ver Orbitais";
}

function openModal(el) {
    document.getElementById('card-inner').classList.remove('is-flipped');
    document.getElementById('m-number').innerText = `Nº ATÔMICO ${el.n}`;
    document.getElementById('m-symbol').innerText = el.s;
    document.getElementById('m-name').innerText = el.name;
    document.getElementById('m-desc').innerText = el.desc || "Informações sobre propriedades químicas.";
    document.getElementById('m-img').src = `https://via.placeholder.com/300x180?text=${el.name}`;
    document.getElementById('modal').style.display = 'flex';
}

function toggleFlip() { document.getElementById('card-inner').classList.toggle('is-flipped'); }
function closeModal() { document.getElementById('modal').style.display = 'none'; }
function filter(cat) { document.querySelectorAll('.element').forEach(el => { if(el.getAttribute('data-cat') !== cat) el.classList.add('fade'); }); }
function clearFilter() { document.querySelectorAll('.element').forEach(el => el.classList.remove('fade')); }
function searchElement() {
    const q = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.element').forEach(el => el.classList.toggle('fade', !el.getAttribute('data-search').includes(q)));
}

init();