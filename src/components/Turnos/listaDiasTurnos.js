const mesCompleto = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31
];

const mesEnero = mesCompleto;
const mesFebrero = mesCompleto.slice(0, 28);
const mesMarzo = mesCompleto;
const mesAbril = mesCompleto.slice(0, 30);
const mesMayo = mesCompleto.slice(0, 31);
const mesJunio = mesCompleto.slice(0, 30);
const mesJulio = mesCompleto;
const mesAgosto = mesCompleto;
const mesSeptiembre = mesCompleto.slice(0, 30);
const mesOctubre = mesCompleto;
const mesNoviembre = mesCompleto.slice(0, 30);
const mesDiciembre = mesCompleto;

const mesesConDias = {
    mesEnero, mesFebrero, mesMarzo, mesAbril,
    mesMayo, mesJunio, mesJulio, mesAgosto,
    mesSeptiembre, mesOctubre, mesNoviembre, mesDiciembre
};

export default mesesConDias;