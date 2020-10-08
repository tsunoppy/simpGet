////////////////////////////////////////////////////////////////////////
window.onload = function (){

    document.getElementById('job').value = 'New Project';
    document.getElementById('ii').value = 1.00;
    document.getElementById('zone').selectedIndex = 3;
    document.getElementById('soilPro').selectedIndex = 3;
    document.getElementById('ct').selectedIndex = 0;
    document.getElementById('rr').value = 4.5;
    document.getElementById('hn').value = 10.0;

//    ZoneFactor(inputform);
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

var downloadAsFile = function(fileName, content) {

    var textArray = [];

    var npara = 7;
    textArray[0]    = document.title;
    textArray[1]    = document.getElementById('job').value;
    textArray[2]    = document.getElementById('ii').value;
    textArray[3]    = document.getElementById('zone').selectedIndex;
    textArray[4]    = document.getElementById('soilPro').selectedIndex;
    textArray[5]    = document.getElementById('ct').selectedIndex;
    textArray[6]    = document.getElementById('rr').value;
    textArray[7]    = document.getElementById('hn').value;

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

	    document.getElementById('job').value = textArray[1]    ;
	    document.getElementById('ii').value = textArray[2]    ;
	    document.getElementById('zone').selectedIndex = textArray[3]    ;
	    document.getElementById('soilPro').selectedIndex = textArray[4]    ;
	    document.getElementById('ct').selectedIndex = textArray[5]    ;
	    document.getElementById('rr').value = textArray[6]    ;
	    document.getElementById('hn').value = textArray[7]    ;

	    OnButtonClick();

	}
    },false);

}

////////////////////////////////////////////////////////////////////////
function ZoneFactor(zoneform) {

    var result = "";
    var idx = zoneform.zone.selectedIndex;
    var zoneFactor;


    if( idx == 0 ){
	zoneFactor = 0.075;
	result += " Z = " + zoneFactor;
	document.getElementById('addzoneFactor').innerHTML = result;
    }
    if( idx == 1 ){
	zoneFactor = 0.15;
	result += " Z = " + zoneFactor;
	document.getElementById('addzoneFactor').innerHTML = result;
    }
    if( idx == 2 ){
	zoneFactor = 0.20;
	result += " Z = " + zoneFactor;
	document.getElementById('addzoneFactor').innerHTML = result;
    }
    if( idx == 3 ){
	zoneFactor = 0.30;
	result += " Z = " + zoneFactor;
	document.getElementById('addzoneFactor').innerHTML = result;
    }
    if( idx == 4 ){
	zoneFactor = 0.40;
	result += " Z = " + zoneFactor;
	document.getElementById('addzoneFactor').innerHTML = result;
    }

}



function OnButtonClick(){


    // input
    // ------------------------------------------------------------

    //    var btn = document.getElementById('btn');
    var ii = document.getElementById('ii').value;
    var zz = document.getElementById('zone').value;
    var soilProfile = document.getElementById('soilPro').value;
    var ct = document.getElementById('ct').value;
    var rr = document.getElementById('rr').value;

    var hn = document.getElementById('hn').value;

    // Start calculation
    // ------------------------------------------------------------

    //    btn.addEventListener('click', function() {

    // --------------------------------------------------
    // Output

    var result = '';

    result += " -> Seismic Zone Factor, Z = " + zz;

    document.getElementById('addzoneFactor').innerHTML = result;

    var period = ct*Math.pow(hn,3.0/4.0);

    var outPeriod = "";
    outPeriod += " -> T = C<sub>t</sub> ( h<sub>n</sub> )<sup>3/4</sup> = ";
    outPeriod += ct + ' x ( ' + hn + ' )<sup>3/4</sup> =';
    outPeriod += period.toFixed(2);
    outPeriod += " s";

    document.getElementById('addPeriod').innerHTML = outPeriod;


    //Seismic Coef.

    var ca,cv;

    var idx = document.getElementById('zone').selectedIndex;

    switch( soilProfile ){

	// In case of Sa
    case 'Sa':
	switch( idx ){
	case 0:
	    ca=0.06;
	    cv=0.06;
	    break;
	case 1:
	    ca=0.12;
	    cv=0.12;
	    break;
	case 2:
	    ca=0.16;
	    cv=0.16;
	    break;
	case 3:
	    ca=0.24;
	    cv=0.24;
	    break;
	case 4:
	    ca=0.32;
	    cv=0.32;
	    break;
	default:
	    ca = 9999;
	    cv = 9999;
	    break;
	}
	break;

    case 'Sb':
	switch( idx ){
	case 0:
	    ca=0.08;
	    cv=0.08;
	    break;
	case 1:
	    ca=0.15;
	    cv=0.15;
	    break;
	case 2:
	    ca=0.20;
	    cv=0.20;
	    break;
	case 3:
	    ca=0.30;
	    cv=0.30;
	    break;
	case 4:
	    ca=0.40;
	    cv=0.40;
	    break;
	default:
	    ca = 9999;
	    cv = 9999;
	    break;
	}
	break;
    case 'Sc':
	switch( idx ){
	case 0:
	    ca=0.09;
	    cv=0.13;
	    break;
	case 1:
	    ca=0.18;
	    cv=0.25;
	    break;
	case 2:
	    ca=0.24;
	    cv=0.32;
	    break;
	case 3:
	    ca=0.33;
	    cv=0.45;
	    break;
	case 4:
	    ca=0.40;
	    cv=0.56;
	    break;
	default:
	    ca = 9999;
	    cv = 9999;
	    break;
	}

	break;

    case 'Sd':
	switch( idx ){
	case 0:
	    ca=0.12;
	    cv=0.18;
	    break;
	case 1:
	    ca=0.22;
	    cv=0.32;
	    break;
	case 2:
	    ca=0.28;
	    cv=0.40;
	    break;
	case 3:
	    ca=0.36;
	    cv=0.54;
	    break;
	case 4:
	    ca=0.44;
	    cv=0.64;
	    break;
	default:
	    ca = 9999;
	    cv = 9999;
	    break;
	}

	break;
    case 'Se':
		switch( idx ){
	case 0:
	    ca=0.19;
	    cv=0.26;
	    break;
	case 1:
	    ca=0.30;
	    cv=0.50;
	    break;
	case 2:
	    ca=0.34;
	    cv=0.64;
	    break;
	case 3:
	    ca=0.36;
	    cv=0.84;
	    break;
	case 4:
	    ca=0.44;
	    cv=0.96;
	    break;
	default:
	    ca = 9999;
	    cv = 9999;
	    break;
	}

	break;
    default:
	ca = 99991;
	cv = 99991;
    }

    var outCoef = "";
    outCoef += " &nbsp; with Zone Factor Z, &nbsp;&nbsp;-> C<sub>a</sub> = " + ca + " , ";
    outCoef += " C<sub>v</sub> = " + cv;

    document.getElementById('addCoef').innerHTML = outCoef;

    // Base Shear Coef.

    var cv1 = cv*ii/(rr*period);
    var cv2 = 2.5*ca*ii/rr;
    var cv3 = 0.11*ca*ii;

    var outFinal = "<p>";
    outFinal += "<h4>- Base Shear Cofficient, V/W </h4>";
    outFinal += "</p>";


    outFinal += "<table><tbody>";

    outFinal += "<tr><td>";
    outFinal += "(V/W)<sub>1</sub> = ( C<sub>v</sub> I ) / ( R T ) = ";
    outFinal += "</td><td>";
    outFinal += " ( " + cv + "x " +  ii + " ) / ( " + rr + " x " + period.toFixed(3) + " ) = ";
    outFinal += "</td><td>";
    outFinal += cv1.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "<tr><td>";
    outFinal += "(V/W)<sub>2</sub> = ( 2.5 C<sub>a</sub> I ) / R  = ";
    outFinal += "</td><td>";
    outFinal += " ( 2.5 x " + ca + " x " +  ii + " ) / " + rr  + " = ";
    outFinal += "</td><td>";
    outFinal += cv2.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "<tr><td>";
    outFinal += "(V/W)<sub>3</sub> = 0.11 C<sub>a</sub> I  = ";
    outFinal += "</td><td>";
    outFinal += " 0.11 x " + ca + " x " +  ii + " = ";
    outFinal += "</td><td>";
    outFinal += cv3.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "</tbody></table>";

    outFinal += "<p>";
    outFinal += "V/W = Min{ (V/W)<sub>1</sub>, (V/W)<sub>2</sub> } = ";
    outFinal += Math.min(cv1,cv2).toFixed(3);
    outFinal += "</p>";

    var bsc = Math.max(cv3,Math.min(cv1,cv2));

    outFinal += "<p>";
    outFinal += "Therefore, V/W = Max[ Min{ (V/W)<sub>1</sub>, (V/W)<sub>2</sub> }, (V/W)<sub>3</sub>] =";
    outFinal += bsc.toFixed(3);
    outFinal += "</p";
    outFinal += "";
    outFinal += "";
    outFinal += "";
    outFinal += "";

    document.getElementById('result').innerHTML = outFinal;
}
