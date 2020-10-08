window.onload = function (){
    document.getElementById('job').value = 'New Project';
    document.getElementById('category').selectedIndex = 1;
    var ii = ie(document.getElementById('category').value);
    document.getElementById('ii').value = ii.toFixed(2);
    document.getElementById('ss').value = 0.77;
    document.getElementById('s1').value = 0.31;
    document.getElementById('soilPro').selectedIndex = 3;
    document.getElementById('ct').selectedIndex = 0;
    document.getElementById('rr').value = 4.5;
    document.getElementById('hn').value = 10.0;

}

////////////////////////////////////////////////////////////////////////

var downloadAsFile = function(fileName, content) {

    var textArray = [];

    var npara = 9;
    textArray[0]    = document.title;
    textArray[1]    = document.getElementById('job').value;
    textArray[2]    = document.getElementById('category').selectedIndex;
    textArray[3]    = document.getElementById('ii').value;
    textArray[4]    = document.getElementById('ss').value;
    textArray[5]    = document.getElementById('s1').value;
    textArray[6]    = document.getElementById('soilPro').selectedIndex;
    textArray[7]    = document.getElementById('ct').selectedIndex;
    textArray[8]    = document.getElementById('rr').value;
    textArray[9]    = document.getElementById('hn').value;

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
	    document.getElementById('job').value = textArray[1];
	    document.getElementById('category').selectedIndex = textArray[2]    ;
	    document.getElementById('ii').value = textArray[3]    ;
	    document.getElementById('ss').value = textArray[4]    ;
	    document.getElementById('s1').value = textArray[5]    ;
	    document.getElementById('soilPro').selectedIndex = textArray[6]    ;
	    document.getElementById('ct').selectedIndex = textArray[7]    ;
	    document.getElementById('rr').value = textArray[8]    ;
	    document.getElementById('hn').value = textArray[9]    ;

	    OnButtonClick();

	}
    },false);

}


function xx(idx){
    switch (idx){
    case 0:
	return 0.8;
	break;
    case 1:
	return 0.9;
	break;
    case 2:
	return 0.75;
	break;
    case 3:
	return 0.75;
	break;
    case 4:
	return 0.75;
	break;
    }
}

function OnButtonClick(){


    // input
    // ------------------------------------------------------------

    //    var btn = document.getElementById('btn');
    var category = document.getElementById('category').value;
    var ii = ie( category );
    //    var ii = document.getElementById('ii').value;
    document.getElementById('ii').value = ii.toFixed(2);
    //    var zz = document.getElementById('zone').value;
    var ss = document.getElementById('ss').value;
    var s1 = document.getElementById('s1').value;
    //
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

//    result += " -> Seismic Zone Factor, Z = " + zz;
//    document.getElementById('addzoneFactor').innerHTML = result;

    var xxx = xx(document.getElementById('ct').selectedIndex);
    var period = ct*Math.pow(hn,xxx);

    var outPeriod = "";
    outPeriod += " -> T = C<sub>t</sub> ( h<sub>n</sub> )<sup>" + xxx + "</sup> = ";
    outPeriod += ct + ' x ( ' + hn + ' )<sup>'+xxx+'</sup> =';
    outPeriod += period.toFixed(2);
    outPeriod += " s";

    document.getElementById('addPeriod').innerHTML = outPeriod;


    //Seismic Coef.

    var fa,fv;

//    var idx = document.getElementById('zone').selectedIndex;

    fa = ffa( ss, soilProfile );
    fv = ffv( s1, soilProfile );

    var outCoef = "";
    outCoef += " &nbsp; with S<sub>1</sub>, S<sub>s</sub>, &nbsp;&nbsp;-> F<sub>a</sub> = " + fa.toFixed(2) + " , ";
    outCoef += " F<sub>v</sub> = " + fv.toFixed(2);

    document.getElementById('addCoef').innerHTML = outCoef;

    // Base Shear Coef.


    var sms = fa*ss;
    var sds = (2.0/3.0)*sms;

    var sm1 = fv*s1;
    var sd1 = (2.0/3.0)*sm1;

    //
    var cv1 = sds/(rr/ii);
    var cv2 = 0.044 * ii * sds;
    var cv3 = sd1/ (period * ( rr/ii ) );

    var outFinal = "<p>";
    outFinal += "<h4>- Base Shear Cofficient, V/W </h4>";
    outFinal += "</p>";

    outFinal += "<table><tbody>";

    outFinal += "<tr><td>";
    outFinal += "C<sub>s</sub> = (V/W)<sub>s</sub> = ( S<sub>DS</sub> I ) /  R  = ";
    outFinal += "</td><td>";
    outFinal += " ( " + sds.toFixed(2) + "x " +  ii + " ) / " + rr + " ) = ";
    outFinal += "</td><td>";
    outFinal += cv1.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "<tr><td>";
    outFinal += "C<sub>min</sub> = (V/W)<sub>min</sub> = 0.044 I S<sub>DS</sub> = ";
    outFinal += "</td><td>";
    outFinal += " ( 0.044 x " + " x " +  ii + " x " + sds.toFixed(2)  + " = ";
    outFinal += "</td><td>";
    outFinal += cv2.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "<tr><td>";
    outFinal += "C<sub>max</sub> = (V/W)<sub>max</sub> = S<sub>D1</sub> I / ( T R ) = ";
    outFinal += "</td><td>";
    outFinal += sd1.toFixed(2) + " x " +  ii + " / ( " + period.toFixed(2) + " x " + rr + " ) = " ;
    outFinal += "</td><td>";
    outFinal += cv3.toFixed(3);
    outFinal += "</td></tr>";

    outFinal += "</tbody></table>";

    outFinal += "<p>";
    outFinal += "V/W = Max{ (V/W)<sub>s</sub>, (V/W)<sub>min</sub> } = ";
    outFinal += Math.max(cv1,cv2).toFixed(3);
    outFinal += "</p>";

    var bsc = Math.min(cv3,Math.max(cv1,cv2));

    outFinal += "<p>";
    outFinal += "Therefore, V/W = Min[ Min{ (V/W)<sub>s</sub>, (V/W)<sub>min</sub> }, (V/W)<sub>max</sub>] =";
    outFinal += bsc.toFixed(3);
    outFinal += "</p";

    outFinal += "<p>";
    outFinal += "<h4>- Seismic Design Category </h4>";
    outFinal += "</p>";


    var sdcategory = sdc( sds, s1, category );

    outFinal += "<p>";
    outFinal += " Seismic Design Category shall be";
    outFinal += "\" <u>" + sdcategory + "</u> \"";
    outFinal += " by S<sub>DS</sub>, S<sub>1</sub>, Category";
    outFinal += "</p>";
    outFinal += "";
    outFinal += "";

    document.getElementById('result').innerHTML = outFinal;
}


function ffa( ss, site ){
//# calculate the fa factor based on site class and Ss value.
//# site; Site Classification

    var x = ss;
    if ( site == "A" )
	return 0.8;
    if ( site == "B" )
	return 1.0;

    var xx = [];
    xx[1] = 0.25;
    xx[2] = 0.50;
    xx[3] = 0.75;
    xx[4] = 1.00;
    xx[5] = 1.25;

    var y =[];

    if ( site == "C" ){

	y[1] = 1.2;
	y[2] = 1.2;
	y[3] = 1.1;
	y[4] = 1.0;
	y[5] = 1.0;
    }

    if ( site == "D" ){
	y[1] = 1.6;
	y[2] = 1.4;
	y[3] = 1.2;
	y[4] = 1.1;
	y[5] = 1.0;
    }

    if ( site == "E" ){
	y[1] = 2.5;
	y[2] = 1.7;
	y[3] = 1.2;
	y[4] = 0.9;
	y[5] = 0.9;
    }

//    # Calculate Fa

    var i, ind;
    var fa;

    for( i = 1 ; i <= 5 ; i ++ ){
	if( x < xx[i] ) ind = i;
    }

    if ( x > xx[5] ) ind = 6;

    if ( ind == 1 )
	return y[1];

    if ( ind > 1 ){
	fa = (y[ind]-y[ind-1])/(xx[ind]-xx[ind-1])*(x-xx[ind]) + y[ind];
	return fa;
    }
}

//--------------------------------------------------

function ffv( s1, site ){
//# calculate the Fv factor based on site class and Ss value.

    var x = s1;
    if ( site == "A" )
	return 0.8;
    if ( site == "B" )
	return 1.0;

    var xx=[];

    xx[1] = 0.10;
    xx[2] = 0.20;
    xx[3] = 0.30;
    xx[4] = 0.40;
    xx[5] = 0.50;

    var y = [];

    if ( site == "C" ){
	y[1] = 1.7;
	y[2] = 1.6;
	y[3] = 1.5;
	y[4] = 1.4;
	y[5] = 1.3;
    }

    if ( site == "D" ){
	y[1] = 2.4;
	y[2] = 2.0;
	y[3] = 1.8;
	y[4] = 1.6;
	y[5] = 1.5;
    }

    if ( site == "E" ){
	y[1] = 3.5;
	y[2] = 3.2;
	y[3] = 2.8;
	y[4] = 2.4;
	y[5] = 2.4;
    }

    //    # Calculate Fa
    var i,ind;
    var fv;

    for( i = 1 ; i <= 5 ; i ++ ){
	if( x < xx[i] ) ind = i;
    }

    if ( x > xx[5] ) ind = 6;

    if ( ind == 1 )
	return y[1];

    if ( ind > 1 ){
	fv = (y[ind]-y[ind-1])/(xx[ind]-xx[ind-1])*(x-xx[ind]) + y[ind];
	return fv;
    }

}

//--------------------------------------------------
// Seismic Design Category


function sdc( sds, s1, category ){

    var sdc1;
    var sdc2;
    var sdcc;

    if ( s1 >= 0.75) {
	if ( category == "IV" ){
	    sdc1 = "F";
	    return sdc1;
	}
	else if ( category == "I" && category == "II" && category == "III") {
	    sdc1 = "E";
	    return sdc1;
	}
    }
    /*
# Short Period Control
#
# setting order
# A = 1
# B = 2
# C = 3
# D = 4
#
*/
    if ( category == "I" || category == "II" || category == "III" ){
	if( sds < 0.1617 ){
	    sdc1 = 1;
	}
	if( 0.1617 <= sds && sds < 0.33 ){
	    sdc1 = 2;
	}
	if( 0.33   <= sds && sds < 0.50 ){
	    sdc1 = 3;
	}
	if( 0.50   <= sds){
	    sdc1 = 4;
	}
    }
    if ( category == "IV"){
	if( sds < 0.1617 ){
	    sdc1 = 1;
	}
	if( 0.1617 <= sds && sds < 0.33 ){
	    sdc1 = 3;
	}
	if( 0.33   <= sds && sds < 0.50 ){
	    sdc1 = 4;
	}
	if( 0.50   <= sds){
	    sdc1 = 4;
	}
    }

//    # 1-S Period Control
    if ( category == "I" || category == "II" || category == "III" ){


	if( sds < 0.067 ){
	    sdc2 = 1;
	}
	if( 0.067 <= sds && sds < 0.133 ){
	    sdc2 = 2;
	}
	if( 0.133   <= sds && sds < 0.20 ){
	    sdc2 = 3;
	}
	if( 0.20   <= sds){
	    sdc2 = 4;
	}
    }
    if ( category == "IV"){
	if( sds < 0.067 ){
	    sdc2 = 1;
	}
	if( 0.067 <= sds && sds < 0.133 ){
	    sdc2 = 3;
	}
	if( 0.133   <= sds && sds < 0.20 ){
	    sdc2 = 4;
	}
	if( 0.20   <= sds){
	    sdc2 = 4;
	}
    }

    if( sdc1 > sdc2 ) {
	sdcc = sdc1;
    }
    else if ( sdc2 >= sdc1 ){
	sdcc = sdc2;
    }

    if( sdcc == 1 ){
	return "A";
    }
    if( sdcc == 2 ){
	return "B";
    }
    if( sdcc == 3 ){
	return "C";
    }
    if( sdcc == 4 ){
	return "D";
    }
}

function ie( category ){
    if ( category == "I" ){
	return 1.0;
    }
    if ( category == "II" ){
	return 1.0;
    }
    if ( category == "III" ){
	return 1.25;
    }
    if ( category == "IV" ){
	return 1.50;
    }
}
