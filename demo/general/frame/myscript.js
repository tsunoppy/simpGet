/*
 Start to run JavaScript
 */

window.onload = function (){

    // input data
    var l = 6600;
    var h = 4000;
    var gb = 350;
    var gd = 600;
    var cb = 200;
    var cd = 200;
    var fc = 21.0;
    var ph = 10.0;

    var divBeam = 0.35;
    var divCol = 0.7;

    document.getElementById('job').value = 'New Project';
    document.getElementById('l').value = l;
    document.getElementById('h').value = h;
    document.getElementById('gb').value = gb;
    document.getElementById('gd').value = gd;
    document.getElementById('cb').value = cb;
    document.getElementById('cd').value = cd;
    document.getElementById('fc').value = fc;
    document.getElementById('ph').value = ph;
    document.getElementById('divBeam').value = divBeam;
    document.getElementById('divCol').value = divCol;

    DrawSec();
}

////////////////////////////////////////////////////////////////////////
var downloadAsFile = function(fileName, content) {

    var textArray = [];
    textArray[0]    = document.title;
    textArray[1]    = document.getElementById('job').value;
    textArray[2]    = document.getElementById('l').value ;
    textArray[3]    = document.getElementById('h').value ;
    textArray[4]    = document.getElementById('gb').value ;
    textArray[5]    = document.getElementById('gd').value ;
    textArray[6]    = document.getElementById('cb').value ;
    textArray[7]    = document.getElementById('cd').value ;
    textArray[8]    = document.getElementById('fc').value ;
    textArray[9]    = document.getElementById('ph').value ;
    textArray[10]    = document.getElementById('divBeam').value ;
    textArray[11]    = document.getElementById('divCol').value ;

    var n = 11;
    content ='';
    var i;
    for( i = 0; i<=n; i++){
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

	    window.title = textArray[0]    ;
	    document.getElementById('job').value = textArray[1]    ;
	    document.getElementById('l').value = textArray[2]    ;
	    document.getElementById('h').value = textArray[3]    ;
	    document.getElementById('gb').value = textArray[4]    ;
	    document.getElementById('gd').value = textArray[5]    ;
	    document.getElementById('cb').value = textArray[6]    ;
	    document.getElementById('cd').value = textArray[7]    ;
	    document.getElementById('fc').value = textArray[8]    ;
	    document.getElementById('ph').value = textArray[9]    ;
	    document.getElementById('divBeam').value = textArray[10]    ;
	    document.getElementById('divCol').value = textArray[11]    ;

	    DrawSec();
	    OnButtonClick();

	}
    },false);

}

////////////////////////////////////////////////////////////////////////

function OnButtonClick(){

    DrawSec();

    // Input
    ////////////////////////////////////////////////////////////////////////

    var l = Number( document.getElementById('l').value) ;
    var h = Number( document.getElementById('h').value) ;
    var gb = Number( document.getElementById('gb').value) ;
    var gd = Number( document.getElementById('gd').value) ;
    var cb = Number( document.getElementById('cb').value) ;
    var cd = Number( document.getElementById('cd').value) ;
    var fc = Number( document.getElementById('fc').value) ;
    var ph = Number( document.getElementById('ph').value) ;
    var divCol = Number( document.getElementById('divCol').value) ;
    var divBeam = Number( document.getElementById('divBeam').value) ;

    // Initial Setting
    ////////////////////////////////////////////////////////////////////////
    var e = 4700*Math.sqrt( fc );

    var ib = gb*Math.pow(gd,3)/12 *divBeam;
    var ic = cb*Math.pow(cd,3)/12 *divCol;

    var k = ib/ic * h/l;

    var vv = ph* 3.0*h*k / ( l*( 1+6*k) ) ;
    var hh =  -1/2 *ph;
    var ma = ph* -h/2 * ( 1+3*k )/ ( 1+6*k ) ;
    var md = -ma;
    var mb = ph* h/2* 3*k/ (1+6*k) ;
    var mc = -mb;

    ma = ma/ Math.pow(10,3);
    mb = mb/ Math.pow(10,3);
    mc = mc/ Math.pow(10,3);
    md = md/ Math.pow(10,3);

    // D Method for Horizontal Def

    var kg1 = ib/l;
    var kc = ic/h;
    var kb = kg1/kc;
    var a = (0.5+kb)/(2.0+kb);

    var dd = a*kc;
    var stan = 12.0*e/Math.pow(h,2);

    var def = ph*1000/dd/stan;

    // Calculation Stress
    ////////////////////////////////////////////////////////////////////////


    var result = '';

    //////////////////////////////////////////////////
    result += '<p><h4> - Preparation </h4> </p>';

    result += '<table><tbody>';

    result += '<tr><td>';
    result += 'I<sub>b</sub> =';
    result += '</td><td>';
    result += ib.toFixed(0);
    result += '</td><td>';
    result += 'mm<sup>4</sup>, &nbsp;';
    result += '</td><td>';
    result += 'I<sub>c</sub> =  ';
    result += '</td><td>';
    result += ic.toFixed(0);
    result += '</td><td>';
    result += 'mm<sup>4</sup>';
    result += '</td></tr>';

    result += '<tr><td>';
    result += 'I<sub>b</sub> /l =';
    result += '</td><td>';
    result += (ib/l).toFixed(0);
    result += '</td><td>';
    result += 'mm<sup>3</sup>, &nbsp;';
    result += '</td><td>';
    result += 'I<sub>c</sub> / h =  ';
    result += '</td><td>';
    result += (ic/h).toFixed(0);
    result += '</td><td>';
    result += 'mm<sup>3</sup>';
    result += '</td></tr>';

    result += '</tbody></table>';

    //////////////////////////////////////////////////
    result += '<p><h4> - Analysis </h4> </p>';

    result += '<table><tbody>';

    result += '<tr><td>';
    result += 'k = I<sub>b</sub> / I<sub>c</sub> h / l = ';
    result += '</td><td>';
    result += k.toFixed(2);
    result += '</td><td>';
    result += '-';
    result += '</td></tr>';

    result += '<tr><td>';
    result += 'N =  ';
    result += '</td><td>';
    result += vv.toFixed(2);
    result += '</td><td>';
    result += 'kN';
    result += '</td></tr>';

    result += '<tr><td>';
    result += 'V = ';
    result += '</td><td>';
    result += hh.toFixed(2);
    result += '</td><td>';
    result += 'kN';
    result += '</td></tr>';

    result += '<tr><td>';
    result += 'M<sub>base</sub> = ';
    result += '</td><td>';
    result += ma.toFixed(2);
    result += '</td><td>';
    result += 'kN.m';
    result += '</td></tr>';

    result += '<tr><td>';
    result += 'M<sub>top</sub> = ';
    result += '</td><td>';
    result += mb.toFixed(2);
    result += '</td><td>';
    result += 'kN.m';
    result += '</td></tr>';


    result += '</tbody></table>';

    //////////////////////////////////////////////////

    result += '<p><h4> - Deflection </h4> </p>';

    result += '<table><tbody>';

    result += '<tr><td>';
    result += 'kb = kg/kc';
    result += '</td><td>';
    result += kb.toFixed(2);
    result += '</td><td>';
    result += '-&nbsp;&nbsp;';

    result += '</td><td>';
    result += 'a = ';
    result += '</td><td>';
    result += a.toFixed(2);
    result += '</td></tr>';

    //
    result += '<tr><td>';
    result += 'V<sub>H</sub> / &delta; ';
    result += '</td><td>';
    result += (dd*stan).toFixed(0);
    result += '</td><td>';
    result += 'N/mm&nbsp;&nbsp;';

    result += '</td><td>';
    result += '&delta; = ';
    result += '</td><td>';
    result += def.toFixed(2);
    result += '</td><td>';
    result += 'mm &nbsp;';
    result += '( H/' + (l/def).toFixed(0) + ')';
    result += '</td></tr>';


    result += '</tbody></table>';


    ////////////////////////////////////////////////////////////////////////

    document.getElementById('result').innerHTML = result;

}

////////////////////////////////////////////////////////////////////////
//# Calculation of design moment for main truss
function mmd(n1, p, span){
    //    # n1: Point Number
    var aaa = 0.0;
    var a,b;
    var i;

    for( i = 1 ; i<= n1; i++){
	a = span / (n1 + 1) * i;
	b = span - a;

	if( a <= span/2.0 ){
	    aaa = aaa + a * p / 2.0;
	}
	else{
	    aaa = aaa + b * p / 2.0;
	}
    }
    return aaa;
}

function mmc(n1, p, span){

    var aaa = 0.0;
    var a,b;
    var i;

    for( i = 1 ; i<= n1; i++){
	a = span / (n1 + 1) * i;
	b = span - a;
	aaa = aaa + p * a * Math.pow(b , 2) / Math.pow( span , 2);
    }

    return aaa;
}

//# Calculation of vertical deflection for main truss
function delvmain(n1, p, span, si){
    // Load Number
    // p, kN
    // span, m
    //#'si inertia cm4
    // delv cm
    var delv = 0.0;

    /*
    if( n1 == 1 ){
	a = span / 2.0;
	b = a;
	delv = p * b * 100.0 / 3.0 / 20500.0 / si * Math.pow( ( Math.pow(a , 2) + 2.0 * a * b) , 1.5 ) / Math.pow( 3 , 1.5) * Math.pow(100.0, 1.5);
    }

    else {
*/
    for(i = 1; i <= n1; i++){
	a = span / (n1 + 1) * i;
	b = span - a;
	if( a < b ){
	    delv = delv + p * b / span / 3.0 / 20500.0 / si * Math.pow( ( Math.pow(a*100 , 2) + 2.0 * a * b*10000)/3 , 1.5 );
	} else {
	    delv = delv + p * a / span / 3.0 / 20500.0 / si * Math.pow( ( Math.pow(b*100 , 2) + 2.0 * a * b*10000)/3 , 1.5 );
	}
	console.log(n1, b.toFixed(2), a.toFixed(2),delv.toFixed(2));
    }
    /*
      }
    */
    return delv;
}

function psi( ph1, sa1, si1, ph2, sa2, si2, dp){
    //# calculate the Fv factor based on site class and Ss value.
    //# Notation
    //#   sa1: Area of Top chord     //mm2
    //#   si1: Inertia of Top Chord  //mm4
    //#   ph1: Depth of Top Chord    //mm
    //#   sa2: Area of Bot. chord    //mm2
    //#   si2: Inertia of Bot. Chord //mm4
    //#   ph2: Depth of Bot. Chord   //mm
    //#   dp : Depth of truss        //mm
    //# -> psi mm4
    s = sa1*(dp-ph1/2.0) + sa2*(ph2/2.0);
    yg = s/ (sa1+sa2);
    ppsi = sa1*Math.pow(dp-ph1/2.0-yg,2) + sa2 * Math.pow(ph2/2.0-yg,2)
    ppsi = ppsi + si1 + si2;
    return ppsi;
}

function fa(i, fy){
    //    #' allowable compression unit stress
    //    # i : srenderness ratio
    //    # fy: permissible tensile strength / N/mm2
    cc = 131;
    fa1 = 5.0 / 3.0 + 3.0 / 8.0 * i / cc - 1.0 / 8.0 * Math.pow( i / cc , 3);
    fa1 = (1.0 - Math.pow(i / cc, 2 )/ 2.0) / fa1 * fy;
    fa2 = 12.0 * Math.pow(3.141592 , 2) * 2.05 * Math.pow(10 , 6) / 23.0 / Math.pow(i , 2);
    if( i < 130.0){
	return fa1;
    }
    if( i >= 130.0){
	return fa2 / 9.8;
    }
}

////////////////////////////////////////////////////////////////////////
// Pipe Property Function

function pipeSec(name){


    // Dia,Thickness,Area,Inertia,Radius,300*i
    switch (name){
    case "p-48.6x2.3":
	return Array( 48.6, 2.3, 335, 89867, 16.4, 4917);
	break;
    case "p-48.6x3.2":
	return Array( 48.6, 3.2, 456, 118176 , 16.1, 4827);
	break;
    case "p-60.5x3.2":
	return Array( 60.5, 3.2, 576, 237152, 20.3, 6087);
	break;
    case "p-60.5x4.0":
	return Array( 60.5, 4.0, 710, 284732, 20.0, 6008);
	break;
    case "p-76.3x3.2":
	return Array( 76.3, 3.2,  735, 491806, 25.9, 7761);
	break;
    case "p-89.1x3.2":
	return Array( 89.1, 3.2,  864, 797612, 30.4, 9117);
	break;
    case "p-76.3x4.0":
	return Array( 76.3, 4.0,  909, 595473, 25.6, 7680);
	break;
    case "p-101.6x3.2":
	return Array( 101.6, 3.2, 989, 1198545, 34.8, 10442);
	break;
    case "p-89.1x4.0":
	return Array( 89.1, 4.0, 1069, 970213, 30.1, 9036);
	break;
    case "p-114.3x3.2":
	return Array(114.3, 3.2, 1117, 1724695, 39.3, 11789);
	break;
    case "p-101.6x4.0":
	return Array( 101.6, 4.0, 1226, 1462845, 34.5, 10361);
	break;
    case "p-114.3x4.5":
	return Array( 114.3, 4.5, 1552, 2343194, 38.9, 11656);
	break;
    case "p-114.3x5.6":
	return Array( 114.3, 5.6, 1912, 2831964, 38.5, 11545);
	break;
    case "p-139.8x4.5":
	return Array( 139.8, 4.5, 1913, 4381733, 47.9, 14359);
	break;
    case "p-165.2x4.5":
	return Array( 165.2, 4.5, 2272, 7339398, 56.8, 17051);
	break;
    case "p-139.8x6.0":
	return Array( 139.8, 6.0, 2522, 5655251, 47.4, 14206);
	break;
    case "p-165.2x6.0":
	return Array( 165.2, 6.0, 3001,  9520434,  56.3, 16898);
	break;
    case "p-216.3x6.0":
	return Array( 216.3, 6.0, 3964, 21932206,  74.4,  22315);
	break;
    case "p-216.3x8.0":
	return Array( 216.3, 8.0, 5235, 28435300,  73.7,  22110);
	break;
    default:
	return Array(9999,9999,9999,9999,9999,9999,9999,9999);
    }
}

////////////////////////////////////////////////////////////////////////
// Draw Beam Section Per Input Data
var canvas, ctx;
var scale, xscale, yscale, xcen, ycen;

function DrawSec () {

    var l = Number( document.getElementById('l').value)/1000 ;
    var h = Number( document.getElementById('h').value)/1000 ;
    var gb = Number( document.getElementById('gb').value)/1000 ;
    var gd = Number( document.getElementById('gd').value)/1000 ;
    var cb = Number( document.getElementById('cb').value)/1000 ;
    var cd = Number( document.getElementById('cd').value)/1000 ;

    var span = l;

    ////////////////////////////////////////////////////////////////////////

    var result = '<canvas width=\"700\" id=\"picCanvas\"></canvas>';
    document.getElementById('picture').innerHTML = result;

    canvas = document.getElementById('picCanvas');
    ctx = canvas.getContext("2d");

    xcen = canvas.width / 2 - 45;
    ycen = canvas.height / 2 - 5;

    xscale = (canvas.width-120)/span;
    yscale = (canvas.height-70)/h;
    scale = (xscale < yscale) ? xscale : yscale;

    // Draw Dimension Lines
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.font = "12pt sans-serif";
    ctx.textAlign = "center";


    // Draw Beam Dimensions
    ctx.beginPath();
    ctx.moveTo(xcen-span/2*scale,ycen+h/2*scale+10);
    ctx.lineTo(xcen-span/2*scale,ycen+h/2*scale+30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xcen+span/2*scale,ycen+h/2*scale+10);
    ctx.lineTo(xcen+span/2*scale,ycen+h/2*scale+30);
    ctx.stroke();
    drawLineArrow2(xcen-span/2*scale,ycen+h/2*scale+20,xcen+span/2*scale,ycen+h/2*scale+20);
    ctx.fillText(span.toFixed(2)+' m',xcen,ycen+h/2*scale+40);

    ctx.beginPath();
    ctx.moveTo(xcen+span/2*scale+10,ycen-h/2*scale);
    ctx.lineTo(xcen+span/2*scale+30,ycen-h/2*scale);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xcen+span/2*scale+10,ycen+h/2*scale);
    ctx.lineTo(xcen+span/2*scale+30,ycen+h/2*scale);
    ctx.stroke();
    drawLineArrow2(xcen+span/2*scale+20,ycen-h/2*scale,xcen+span/2*scale+20,ycen+h/2*scale);
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(h.toFixed(2)+' m',xcen+span/2*scale+30,ycen);

    ////////////////////////////////////////////////////////////////////////
    // Draw Dimension Lines
    ctx.fillStyle = "gray";
    ctx.strokeStyle = "gray";
    ctx.font = "12pt sans-serif";
    ctx.textAlign = "center";

    // Draw Top Chord
    ctx.beginPath();
    ctx.moveTo(xcen-span/2*scale-cd/2*scale,ycen-h/2*scale);
    ctx.lineTo(xcen+span/2*scale+cd/2*scale,ycen-h/2*scale);
    ctx.lineWidth = gd*scale;
    ctx.stroke();

    // Draw Column
    ctx.beginPath();
    ctx.moveTo(xcen-span/2*scale,ycen-h/2*scale);
    ctx.lineTo(xcen-span/2*scale,ycen+h/2*scale);
    ctx.lineWidth = cd*scale;
    ctx.stroke();

    // Draw Column
    ctx.beginPath();
    ctx.moveTo(xcen+span/2*scale,ycen-h/2*scale);
    ctx.lineTo(xcen+span/2*scale,ycen+h/2*scale);
    ctx.lineWidth = cd*scale;
    ctx.stroke();

}

function drawFilledPolygon (shape) {
    ctx.beginPath();
    ctx.moveTo(shape[0][0],shape[0][1]);
    for (p in shape)
	if (p > 0) ctx.lineTo(shape[p][0],shape[p][1]);
    ctx.lineTo(shape[0][0],shape[0][1]);
    ctx.fill();
}

function translateShape (shape,x,y) {
    var rv = [];
    for (p in shape)
	rv.push([ shape[p][0] + x, shape[p][1] + y ]);
    return rv;
}

function rotateShape (shape,ang) {
    var rv = [];
    for (p in shape)
	rv.push(rotatePoint(ang,shape[p][0],shape[p][1]));
    return rv;
}

function rotatePoint (ang,x,y) {
    return [
	(x * Math.cos(ang)) - (y * Math.sin(ang)),
	(x * Math.sin(ang)) + (y * Math.cos(ang))
    ];
}

function drawLineArrow (x1,y1,x2,y2) {
    var arrow = [
	[ 2, 0 ],
	[ -8, -5 ],
	[ -8, 5 ]
    ];
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    var ang = Math.atan2(y2-y1,x2-x1);
    drawFilledPolygon(translateShape(rotateShape(arrow,ang),x2,y2));
}

function drawLineArrow2 (x1,y1,x2,y2) {
    var arrow = [
	[ 0, 0 ],
	[ 10, -5 ],
	[ 10, 5 ]
    ];
    var arrow2 = [
	[ 0, 0 ],
	[ -10, -5 ],
	[ -10, 5 ]
    ];
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    var ang = Math.atan2(y2-y1,x2-x1);
    drawFilledPolygon(translateShape(rotateShape(arrow,ang),x1,y1));
    drawFilledPolygon(translateShape(rotateShape(arrow2,ang),x2,y2));
}

function shearForce(numMember, number, pv, span, idx ){
    // numMember : number of digonal
    // number  : number of point loading
    // pv, kN  : point load
    // span, m : truss span
    // idx,    : integer for the number of truss evaluated

    var i;
    var x;
    var xload;

    var v = pv*number/2.0; // reaction force.

    for( i=1; i <= number; i++) {

	x = span/numMember * idx;
	xload = span/(number+1) * i;

	if( xload < x ){
	    v = v - pv;
	}

    }

    return v;
}

function delShear(n1, p, span, ase){
    // delShear cm
    // p kN
    // span m
    // ase mm2

    var delv = 0.0;

    for(i = 1; i <= n1; i++){
	a = span / (n1 + 1) * i;
	b = span - a;
	if( a < b ){
	    delv = delv + p*1000.0 * a*1000 / ( 2.0 * 41000.0 * ase );
	} else {
	    delv = delv + p*1000.0 * b*1000 / ( 2.0 * 41000.0 * ase );
	}
	console.log( "shear Def", n1, b.toFixed(2), a.toFixed(2),delv.toFixed(2)/10);
    }

    return delv/10.0;

}
