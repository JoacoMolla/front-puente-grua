/*
Meses con 31 dias: enero, marzo, julio, agosto, octubre y diciembre
Meses con 30 dias: abril, mayo, junio, septiembre y noviembre
Meses con 28 dias: febrero
 */

const mesCompleto = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31
];

const mesFebrero = mesCompleto.slice(0, 28);
const mesCon31 = mesCompleto.slice(0, 30);

const mesesConDias = {
    mesCompleto,
    mesFebrero,
    mesCon31
};

export default mesesConDias;