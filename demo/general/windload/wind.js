window.onload = function (){
    document.getElementById('job').value            = 'New Project';
    document.getElementById('vv').value             = 53.0;
    document.getElementById('kd').value             = 0.85;
    document.getElementById('expCat').selectedIndex = 0;
    document.getElementById('kzt').value            = 1.0;
    document.gcpiForm.gcpi.selectedIndex            = 2;
    document.getElementById('gg').value             = 0.85;
    document.getElementById('he').value             = 10.0;
    document.getElementById('hr').value             = 12.0;
    document.getElementById('ll').value             = 20.0;
    document.getElementById('bb').value             = 10.0;
    document.getElementById('theta').value          = 15.64;
}

////////////////////////////////////////////////////////////////////////

var downloadAsFile = function(fileName, content) {

    var textArray = [];

    var npara = 12;
    textArray[0]    = document.title;
    textArray[1]    = document.getElementById('job').value            ;
    textArray[2]    = document.getElementById('vv').value             ;
    textArray[3]    = document.getElementById('kd').value             ;
    textArray[4]    = document.getElementById('expCat').selectedIndex ;
    textArray[5]    = document.getElementById('kzt').value            ;
    textArray[6]    = document.gcpiForm.gcpi.selectedIndex            ;
    textArray[7]    = document.getElementById('gg').value             ;
    textArray[8]    = document.getElementById('he').value             ;
    textArray[9]    = document.getElementById('hr').value             ;
    textArray[10]    = document.getElementById('ll').value             ;
    textArray[11]    = document.getElementById('bb').value             ;
    textArray[12]    = document.getElementById('theta').value          ;

    var content ='';
    var i;
    for( i = 0; i<=npara; i++){
	content += textArray[i] + "\n";
    }

    var blob = new Blob([content]);
    var url = window.URL || window.webkitURL;
    var blobURL = url.createObjectURL(blob);

    var a = document.createElement('a');
    a.download = fileName;
    a.href = blobURL;
    a.click();
};

//////////////////////////////////////////////////

function OpenFile(){

    var Inp = document.createElement('input');
    Inp.type = 'file';
    Inp.click();

    //ダイアログでファイルが選択された時
    Inp.addEventListener("change",function(evt){

	var file = evt.target.files;

	//FileReaderの作成
	var reader = new FileReader();
	//テキスト形式で読み込む
	reader.readAsText(file[0]);

	//読込終了後の処理
	reader.onload = function(ev){

	    //CR+LF,CR,LF のいずれかの改行コードでsplitします。
	    var textArray = reader.result.split(/\r\n|\r|\n/);

	    var form = document.inputForm;
	    document.getElementById('job').value            = textArray[1]    ;
	    document.getElementById('vv').value             = textArray[2]    ;
	    document.getElementById('kd').value             = textArray[3]    ;
	    document.getElementById('expCat').selectedIndex = textArray[4]    ;
	    document.getElementById('kzt').value            = textArray[5]    ;
	    document.gcpiForm.gcpi.selectedIndex            = textArray[6]    ;
	    document.getElementById('gg').value             = textArray[7]    ;
	    document.getElementById('he').value             = textArray[8]    ;
	    document.getElementById('hr').value             = textArray[9]    ;
	    document.getElementById('ll').value             = textArray[10]    ;
	    document.getElementById('bb').value             = textArray[11]    ;
	    document.getElementById('theta').value          = textArray[12]    ;

	    OnButtonClick();

	}
    },false);

}

////////////////////////////////////////////////////////////////////////

function OnButtonClick(){

    // input
    // ------------------------------------------------------------

    //    var btn = document.getElementById('btn');

    var vv = document.getElementById('vv').value;
    var kd = document.getElementById('kd').value;
    var expCat = document.getElementById('expCat').value;
    var kzt = document.getElementById('kzt').value;
    var gcpi = document.gcpiForm.gcpi.value;
    var gg = document.getElementById('gg').value;
    var he = document.getElementById('he').value;
    var hr = document.getElementById('hr').value;
    var ll = document.getElementById('ll').value;
    var bb = document.getElementById('bb').value;
    var theta = document.getElementById('theta').value;

    // Start calculation
    // ------------------------------------------------------------

    var alpha,zg;

    if( expCat=="B"){
	alpha = 7.0;
	zg    = 365.75;
    }
    if( expCat=="C"){
	alpha = 9.5;
	zg    = 274.32;
    }
    if( expCat=="D"){
	alpha = 11.5;
	zg    = 213.36;
    }

    // mean height
    var h;

    h = ( he*1.0 + hr*1.0 ) * 0.5;

    // velocity pressure exposure coef. evaluated at height, h

    var kz;
    if ( h < 4.572 ){
	kz = 2.01 * Math.pow( (4.572/zg) , (2.0/alpha) );
    }
    if ( 4.572 <= h && h < zg  ){
	kz = 2.01 * Math.pow( (h/zg) ,(2.0/alpha));
    }

    // Velocity pressure
    var qh;

    qh = 0.613 * kz * kzt * kd * Math.pow( vv, 2.0);

    // width of edge strip
    // Min( 0.1*B, 0.1*L, 0.4h )
    var a,a1,a2;

    if( bb < ll ){
	a1 = 0.1*bb;
    }
    if( bb >= ll ){
	a1 = 0.1*ll;
    }
    if( a1 > 0.4*h ){
	a1 = 0.4*h
    }

    // Min( 0.04B, 0.04L)
    if( bb < ll){
	a2 = 0.04*bb;
    }
    if( bb >+ ll){
	a2 = 0.04*ll;
    }

    // Max( a1, a2, 3 )
    if( a1 > a2 ){
	a = a1;
    }
    if( a1 <= a2 ){
	a = a2;
    }
    if( a < 3.0 ){
	a = 3.0
    }

    // External Pressure Coef.

    // OUTPUT

    var result = "";

    result += "<p>";
    result += "<table><tbody>";

    result += "<tr>";
    result += "<td>"
    result += " h = "
    result += "</td>";
    result += "<td>";
    result += "( h<sub>e</sub> + h<sub>r</sub> ) / 2.0 = ";
    result += "</td>";
    result += "<td>";
    result += h.toFixed(2);
    result += " m";
    result += "</td>";
    result += "</tr>";

    result += "<tr>";
    result += "<td>";
    result += " Z<sub>g</sub> = ";
    result += "</td>";
    result += "<td>";
    result += zg.toFixed(2);
    result += " m, &alpha; = ";
    result += "</td>";
    result += "<td>";
    result += (1.0*alpha).toFixed(3);
    result += "</td>";
    result += "</tr>";

    result += "<tr>";
    result += "<td>";
    result += " K<sub>z</sub> = ";
    result += "</td>";
    result += "<td>";
    result += (1.0*kz).toFixed(2);
    result += " -";
    result += "</td>";
    result += "</tr>";


    qh = 0.613 * kz * kzt * kd * Math.pow( vv, 2.0);
    result += "<tr>";
    result += "<td>";
    result += " q<sub>h</sub> = ";
    result += "</td>";
    result += "<td>";
    result += " 0.613 k<sub>z</sub> k<sub>zt</sub> k<sub>d</sub> V<sup>2</sup> =";
    result += "</td>";
    result += "<td>";
    result += kz.toFixed(2) + " x " + kzt + " x " + kd + " x " + vv + "<sup>2</sup> = ";
    result += "</td>";
    result += "<td>";
    result += qh.toFixed(0);
    result += " N/m<sup>2</sup>";
    result += "</td>";
    result += "</tr>";

    result += "</tbody></table>";
    result += "</p>";

    document.getElementById('result0').innerHTML = result;


//        printf " Load Case A\n";

    var sur = [];
    var part = [];

    sur[1] = "1";
    sur[2] = "2";
    sur[3] = "3";
    sur[4] = "4";
    sur[5] = "1E";
    sur[6] = "2E";
    sur[7] = "3E";
    sur[8] = "4E";

    part[1] = "Wall (Windward)";
    part[2] = "Roof (Windward)";
    part[3] = "Roof (Leeward)";
    part[4] = "Wall (Leeward)";
    part[5] = "Wall (Windward)";
    part[6] = "Roof (Windward)";
    part[7] = "Roof (Leeward)";
    part[8] = "Wall (Leeward)";


    //    printf " Surface, Gcpf, (+GCpi), (-GCpi), +p N/m2, -p N/m2,\n";
    var result1 = "";

    result1 += '<table width="80%" ><tbody>';

    result1 += '<tr align="right">';
    result1 += "<td>";
    result1 += "Surface No.";
    result1 += "</td><td>";
    result1 += "G<sub>cpf</sub>";
    result1 += "</td><td>";
    result1 += "+GC<sub>pi</sub>";
    result1 += "</td><td>";
    result1 += "-GC<sub>pi</sub>";
    result1 += "</td><td>";
    result1 += "+q N/m<sup>2</sup>";
    result1 += "</td><td>";
    result1 += "-q N/m<sup>2</sup>";
    result1 += "</td>";
    result1 += "</tr>";

    var i;
    var gcp = [];
    var gcpp = [];
    var gcpn = [];
    var pp = [];
    var pn = [];

    for( i = 1; i <= 8 ; i++ ){
	gcp[i]  = gcpfLoadA(theta,sur[i]);
	gcpp[i] = gcpfLoadA(theta,sur[i])+(1.0*gcpi);
	gcpn[i] = gcpfLoadA(theta,sur[i])-(1.0*gcpi);
	pp[i] = gcpp[i]*qh;
	pn[i] = gcpn[i]*qh;

	result1 += '<tr align="right">';
	result1 += "<td>";
	result1 += sur[i];
	result1 += "</td><td>";
	result1 += (gcp[i]).toFixed(2);
	result1 += "</td><td>";
	result1 += (gcpp[i]*1.0).toFixed(2);
	result1 += "</td><td>";
	result1 += (gcpn[i]*1.0).toFixed(2);
	result1 += "</td><td>";
	result1 += (gcpp[i]*qh).toFixed(0);
	result1 += "</td><td>";
	result1 += (gcpn[i]*qh).toFixed(0);;
	result1 += "</td><td>";
	result1 += part[i];
	result1 += "</td>";
	result1 += "</tr>";

//	printf "     %3s, %6.2f, %6.2f, %6.2f, %6.0f, %6.0f, %-20s\n",
//	    sur[i], gcp[i], gcpp[i], gcpn[i], gcpp[i]*qh, gcpn[i]*qh, part[i];
    }

    result1 += "</tbody></table>";
    document.getElementById('result1').innerHTML = result1;
    /*

    printf "------\n";
    printf "      For Wall, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[1],pp[5],pn[1],pn[5];
    printf "      For Wall, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[4],pp[8],pn[4],pn[8];
    printf "      For Roof, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[2],pp[6],pn[2],pn[6];
    printf "      For Roof, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[3],pp[7],pn[3],pn[7];

    */


    sur[1] = "1";
    sur[2] = "2";
    sur[3] = "3";
    sur[4] = "4";
    sur[5] = "5";
    sur[6] = "6";

    sur[7] = "1E";
    sur[8] = "2E";
    sur[9] = "3E";
    sur[10] = "4E";
    sur[11] = "5E";
    sur[12] = "6E";

    part[1] = "Wall (Side)";
    part[2] = "Roof";
    part[3] = "Roof";
    part[4] = "Wall (Side)";
    part[5] = "Wall";
    part[6] = "Wall";

    part[7] = "Wall (Side)";
    part[8] = "Roof";
    part[9] = "Roof";
    part[10] = "Wall (Side)";
    part[11] = "Wall";
    part[12] = "Wall";


    /*
      printf "# ---------------------------------------------------------------------\n";
      printf " Load Case B\n";
      printf " Surface, Gcpf, (+GCpi), (-GCpi), +p N/m2, -p N/m2,\n";
    */

    var result2 = "";

    result2 += '<table width="80%" ><tbody>';

    result2 += '<tr align="right">';
    result2 += "<td>";
    result2 += "Surface No.";
    result2 += "</td><td>";
    result2 += "G<sub>cpf</sub>";
    result2 += "</td><td>";
    result2 += "+GC<sub>pi</sub>";
    result2 += "</td><td>";
    result2 += "-GC<sub>pi</sub>";
    result2 += "</td><td>";
    result2 += "+q N/m<sup>2</sup>";
    result2 += "</td><td>";
    result2 += "-q N/m<sup>2</sup>";
    result2 += "</td>";
    result2 += "</tr>";

    for( i = 1; i <= 12 ; i++ ){
	gcp[i]  =gcpfLoadB(sur[i]);
	gcpp[i] =gcpfLoadB(sur[i])+gcpi*1.0;
	gcpn[i] =gcpfLoadB(sur[i])-gcpi*1.0;
	pp[i] = gcpp[i]*qh;
	pn[i] = gcpn[i]*qh;

	result2 += '<tr align="right">';
	result2 += "<td>";
	result2 += sur[i];
	result2 += "</td><td>";
	result2 += (gcp[i]).toFixed(2);
	result2 += "</td><td>";
	result2 += (gcpp[i]*1.0).toFixed(2);
	result2 += "</td><td>";
	result2 += (gcpn[i]*1.0).toFixed(2);
	result2 += "</td><td>";
	result2 += (gcpp[i]*qh).toFixed(0);
	result2 += "</td><td>";
	result2 += (gcpn[i]*qh).toFixed(0);;
	result2 += "</td><td>";
	result2 += part[i];
	result2 += "</td>";
	result2 += "</tr>";

//	printf "     %3s, %6.2f, %6.2f, %6.2f, %6.0f, %6.0f, %-20s\n",
//	    sur[i], gcp[i], gcpp[i], gcpn[i], gcpp[i]*qh, gcpn[i]*qh, part[i];
    }
//	printf "     %3s, %6.2f, %6.2f, %6.2f, %6.0f, %6.0f, %-20s\n",
//	sur[i], gcp[i], gcpp[i], gcpn[i], gcpp[i]*qh, gcpn[i]*qh, part[i];
//    }

    result2 += "</tbody></table>";
    document.getElementById('result2').innerHTML = result2;

        /*
    printf "------\n";
    printf "      For Wall, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[5],pp[11],pn[5],pn[11];
    printf "      For Wall, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[6],pp[12],pn[6],pn[12];
    printf "      For Roof, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[2],pp[8],pn[2],pn[8];
    printf "      For Roof, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[3],pp[9],pn[3],pn[9];
    printf "      For Side, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[1],pp[7],pn[1],pn[7];
    printf "      For Side, P = %6.0f ~ %6.0f N/m2, %6.0f ~ %6.0f N/m2\n",
	pp[4],pp[10],pn[4],pn[10];


    */
}


function gcpfLoadA( theta, surface ){
// External Pressure coeff.

    var gcp = [];

    if( surface == "1" ){
	gcp[1] = 0.40;
	gcp[2] = 0.53;
	gcp[3] = 0.56;
	gcp[4] = 0.56;
    }
    if( surface == "2" ){
	gcp[1] = -0.69;
	gcp[2] = -0.69;
	gcp[3] = 0.21;
	gcp[4] = 0.56;
    }
    if( surface == "3" ){
	gcp[1] = -0.37;
	gcp[2] = -0.48;
	gcp[3] = -0.43;
	gcp[4] = -0.37;
    }
    if( surface == "4" ){
	gcp[1] = -0.29;
	gcp[2] = -0.43;
	gcp[3] = -0.37;
	gcp[4] = -0.37;
    }
    if( surface == "1E" ){
	gcp[1] = 0.61;
	gcp[2] = 0.80;
	gcp[3] = 0.69;
	gcp[4] = 0.69;
    }
    if( surface == "2E" ){
	gcp[1] = -1.07;
	gcp[2] = -1.07;
	gcp[3] = 0.27;
	gcp[4] = 0.69;
    }
    if( surface == "3E" ){
	gcp[1] = -0.53;
	gcp[2] = -0.69;
	gcp[3] = -0.53;
	gcp[4] = -0.48;
    }
    if( surface == "4E" ){
	gcp[1] = -0.43;
	gcp[2] = -0.64;
	gcp[3] = -0.48;
	gcp[4] = -0.48;
    }


    var aaa;

    if( 0.0 <= theta && theta < 5.0){
	return gcp[1];
    }
    if( 5.0 <= theta && theta < 20.0){
	aaa = (gcp[2]-gcp[1])/15.0 * ( theta - 5.0 ) + gcp[1]
	return aaa;
    }
    if( 20.0 <= theta && theta < 30.0){
	aaa = (gcp[3]-gcp[2])/10.0 * ( theta - 20.0 ) + gcp[2]
	return aaa;
    }
    if( 30.0 <= theta && theta < 45.0){
	return gcp[3];
    }
    if( 45.0 <= theta && theta <= 90.0){
	aaa = (gcp[4]-gcp[3])/45.0 * ( theta - 45.0 ) + gcp[3]
	return aaa;
    }
}


function gcpfLoadB( surface ){

// External Pressure Coeff. GCpf on Load Case B
    if( surface == "1") {
	return -0.45;
    }
    if( surface == "2") {
	return -0.69;
    }
    if( surface == "3") {
	return -0.37;
    }
    if( surface == "4") {
	return -0.45;
    }
    if( surface == "5") {
	return 0.40;
    }
    if( surface == "6") {
	return -0.29;
    }
    if( surface == "1E") {
	return -0.48;
    }
    if( surface == "2E") {
	return -1.07;
    }
    if( surface == "3E") {
	return -0.53;
    }
    if( surface == "4E") {
	return -0.48;
    }
    if( surface == "5E") {
	return 0.61;
    }
    if( surface == "6E") {
	return -0.43;
    }

}
