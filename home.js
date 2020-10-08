window.onload = function (){
    homeback();
}

function homeback(){

    var result = "";


    result += "<h1> Welcome to SimpGet</h1>";

    ////////////////////////////////////////////////////////////////////////
    result += "<p>";
    result += " This is the web site which introduce the structural engineering software for getting simple calculation result.";
    result += " It's designed by assuming the person who has enough design ability to understand each formula meaning and to use on basic design stage, or for double check with own calculation.";
    result += "</p><p>";
    result += " Let's the design begin. ^v^!";
    result += "</p>";
    ////////////////////////////////////////////////////////////////////////

    result += "<hr>";

    result += "<h2>Log</h2>";
    result += "<p>";
    result += "Upload: 2020/10/04";
    result += "<hr>";

    result += "<p>";
    result += "This is the test ^v^!";
    result += "</p>";
    result += "<hr>";

    document.getElementById('home').innerHTML = result;
}

function aboutUs(){
    var result = "";
    result += "<h1>";
    result += "About me";
    result += "</h1>";
    result += "<hr>";

    result += "<p>";
    result += " My name is Tsunoda working in Tokyo, Japan as the structural engineer  .";
    result += " I love developing softwares related to the civil engineering.";
    result += "</p>";
    result += "<p>";
    result += " These apprications were coded by Tsunoda for private use";
    result += " You can use it for free.";
    result += "</p><p>";
    result += "Contact would be much appreciated, if any.";
    result += "</p><p>";
    result += "<p>";
    result += " For civil engingeers all over the world.";
    result += "</p>";

    result += "<hr>";

    result += "<p>";
    result += '<a class="linkFont" href="https://github.com/tsunoppy/" target="_blank">';
    result += "Github: https://github.com/tsunoppy/;";
    result += "</a>";
    result += "</p>";

    result += "<p>";
    result += '<a  href="mailto:tsunodat04@gmail.com" target="_top">';
    result += "Email: tsunodat04@gmail.com;";
    result += "</a>";
    result += "</p>";

    result += "<p>";
    result += "Licence: Structural Design 1st Class Architect(Jp)";
    result += "</p>";

    document.getElementById('home').innerHTML = result;
}

function general(){

    var result = "";
    result += "<h1> General </h1>";

    result += "<hr>";
    result += "<h3> Seismic Load </h3>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/ubcSeismic/ubcSeismic.html"  target="_blank">';
    result += 'ubcSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Base Shear Coef. for the seismic load based on UBC CODE";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/asceS/asceSeismic.html"  target="_blank">';
    result += 'asceSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Base Shear Coef. based on ASCE-10";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/multiAsceS/multiSeismic.html"  target="_blank">';
    result += 'MultiAsceSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Seismic Load based on ASCE-10 for Multi story building";
    //result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Wind Load </h3>";
    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/windload/windPr.html"  target="_blank">';
    result += 'windForce';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Wind Pressure based on MWFRS Low-Rise Buildings by ASCE-10";
    result += '<a class="linkFont" href="demo/general/windload/Ref/WindLoad.html"  target="_blank">';
    result += '<br>';
    result += 'Reference';
    result += '</a><br  />';
    //result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Analysis </h3>";
    result += "<table>";

    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/frame/frameOne.html"  target="_blank">';
    result += 'frameOne';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Frame, one span with single story";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////


    result += "</table>";
    document.getElementById('home').innerHTML = result;

}

function found(){

    var result = "";

    result += "<h3> Foundation </h3>";
    result += "<hr>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="foundation/direct/direct.html"  target="_blank">';
    result += 'direct';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Shallow Foundation design by working stress method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="foundation/Retaining/retain.html"  target="_blank">';
    result += 'retain';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Design of retaining wall";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="soil/bearingCap/bearingCap.html"  target="_blank">';
    result += 'bearingCap';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Soil Bearing Capacity for spread footing";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="app/slabOnGrade/SlabOnGrade.html"  target="_blank">';
    result += 'slabOnGrade';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Conventional RC slab on glade by using stress obtained from Westergaard formula, refering PCA";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";


    //////////////////////////////////////////////////

    result += "</table>";

    result += "<h3> Pile </h3>";
    result += "<hr>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="pile/PileBearGen/pileBear.html"  target="_blank">';
    result += 'PileBearGen';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the pile bearing capacity in general method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="pile/PileBearThai/pileBear.html"  target="_blank">';
    result += 'PileBearThai';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the pile bearing capacity by STS method in Thai.";
    result += '<br  />';;
    result += '<a class="linkFont" href="pile/PileBearThai/note.html"  target="_blank">';
    result += 'Notation';
    result += '</a>';
    result += "<hr>";
    result += "</td>";


    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="pile/pileSt/pileStress.html"  target="_blank">';
    result += 'PileStress';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the bending moment due to lateral shear for the long pile by chang fomula based on Japanese method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="pile/protrudingPile/protPile.html"  target="_blank">';
    result += 'ProtrudingPile';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the bending moment due to lateral shear for the long pile with protruding part by chang fomula based on Japanese method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="pile/rcPrePile/rcPrePile.html"  target="_blank">';
    result += 'rcPrePile';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Structural capacity of the reinforced concrete precast pile based on ACI";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</table>";

    result += "<h3> Soil </h3>";
    result += "<hr>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="soil/SoilCorelation/coR.html"  target="_blank">';
    result += 'SoilCor_N';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Soil Parameter from SPT-N value. Cohesion, k30, Pile friction";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="soil/Conset/Conset.html"  target="_blank">';
    result += 'ConSet';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the consolidation settlement. Each soil parameter can be estimated based on that ";
    //result += '<br  />';
    result += '<a class="linkFont" href="soil/ConsCheck/cons.html"  target="_blank">';
    result += 'Reference';
    result += '</a>';

    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="soil/ImSet/ImSet.html"  target="_blank">';
    result += 'ImSet';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Immediate settlement computation";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////

//    result += "<hr>";

    document.getElementById('home').innerHTML = result;

}

function masonry(){

    var result = "";

    result += "<h1> Masonry </h1>";
    result += "<hr>";

    result += "<h2> Brick</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/freeStandingHtml/freeStanding.html" target="_blank">';
    result += 'fleestandBrick';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Freestanding Brick wall design based on India Code (IS, Practice for structural use of unreinforced masonry.).";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////

    result += "</table>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h1> Steel Fiber Concrete </h1>";
    result += "<hr>";

    result += "<h2> Crack due to shrinkage</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="others/crackSlabOnGrade/crack.html" target="_blank">';
    result += 'CrackFiber';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Estimation of the crack width by emperial method for steel fiber concrete slab on grade";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////

    result += "</table>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h1> CFT </h1>";
    result += "<hr>";

    result += "<h2> Column </h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="composit/cft/cft.html" target="_blank">';
    result += 'CFT';
    result += '</a><br  />';

    result += "</td><td>";
    result += "CFT MN Interaction by Japanese Method";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";


    //////////////////////////////////////////////////

    /*
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/freeStandingHtml/freeStanding.html" target="_blank">';
    result += 'BrickGutter';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Brick Gutter Design.";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";
     */

    //////////////////////////////////////////////////

    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;

}

function steel(){

    var result = "";
    result += "<h1> Steel </h1>";
    result += "<hr>";

        result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="steel/HMem/Hmem.html" target="_blank">';
    result += 'Hmem';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Section properties getter for the H-shpe section";
    result += "</td>";

    result += "</tr></table>";
    result += "<hr>";

    //////////////////////////////////////////////////
    result += "<h2> Purlin</h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="steel/purlin/pulin.html" target="_blank">';
    result += 'purlin';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Purlin design by working stress method ";
    result += "</td>";

    result += "</tr>";
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="steel/fly/purWB.html" target="_blank">';
    result += 'purWB';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Purlin with fly brace by working stress method ";
    result += "</td>";

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += "<h2> Lattice Truss W/ Hollow Section </h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="steel/pipeLatt/steelTruss.html" target="_blank">';
    result += 'pipeLattice';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Pipe Truss Analysis by working stress method ";
    result += "</td>";

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += "<h2> Hollow Section Connection</h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += 'hollowConnect';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Getting stress on simple frame model. Cantilever Beam, Single Beam, Single Beam with Cantilever, Pin-Fixed Beam, Fixed Beam, Continuous Beam";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////

    result += "<tr>";
    result += "<td></td>";
    result += "<td></td>";
    result += "<td>";
    result += '<a href="steel/pipeConnection/TYconnect.html" target="_blank">';
    result += '<button>T,Y type</button>';
    result += '</a> &nbsp;';
    result += '<a href="steel/pipeConnection/Cconnect.html" target="_blank">';
    result += '<button>Cross type</button>';
    result += '</a> &nbsp;';
    result += '<a href="steel/pipeConnection/Kconnect.html" target="_blank">';
    result += '<button>K type</button>';
    result += '</a>';
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += "<h2> Crane Girder </h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="steel/MoveSt/move.html" target="_blank">';
    result += 'MoveSt';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Analysis of the crane girder due to moving load";
    result += "</td>";

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    document.getElementById('home').innerHTML = result;

}

function rc(){
    var result = "";
    result += "<h1> RC Menu </h1>";
    result += "<hr>";

    result += "<h3> Column </h3>";

    result += "<table >";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    //result += '<a class="linkFont" href="app/ColAna/ColAna.html" target="_blank">';
    result += 'rcColumn';
    //result += '</a><br  />';

    result += "</td><td>";
    result += "RC MN interaction curve based on SDM (Strength Design Method) and WSD (Working Stress Method) for Rect Shape & Circle Shape";

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += '<a href="app/ColRect/rect.html" target="_blank">';
    result += '<button>RectCol</button>';
    result += '</a> &nbsp;';
    result += '<a href="app/ColCir/circle.html" target="_blank">';
    result += '<button>CircleCol</button>';
    result += '</a> &nbsp;';

    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td>";

    result += '<a class="linkFont" href="app/slender/slender.html" target="_blank">';
    result += 'slenderCol';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Moment magnifier based on ACI-08.";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td>";

    result += '<a class="linkFont" href="app/corbel/corbel.html" target="_blank">';
    result += 'corbel';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Corbel capacity based on ACI-08.";
//    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Beam </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/beam/rcBeam.html" target="_blank">';
    result += 'rcBeam';
    result += '</a><br  />';

    result += "</td><td>";
    result += "RC beam capacity based on SDM (Strength Design Method) and WSD (Working Stress Method.";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/simpRC/simpBeam.html" target="_blank">';
    result += 'SimpBeam';
    result += '</a><br  />';

    result += "</td><td>";
    result += "RC beam design by SDM";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/simpRC/WSDsimpBeam.html" target="_blank">';
    result += 'SimpBeamWSD';
    result += '</a><br  />';

    result += "</td><td>";
    result += "RC beam design by WSD";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////


    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";
    result += '<a class="linkFont" href="app/torsion/torsion.html"  target="_blank">';
    result += 'TorsionBeam';

    result += "</td><td>";
    result += "Torsional moment strength based on ACI-08.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////


    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += 'deepBeam';

    result += "</td><td>";
    result += "Under Construction - Shear Capacity for the deep beam.";
//    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Slab </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/DDM/ddm.html"  target="_blank">';
    result += 'DDM';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Direct Design Method for the Flat Slab based on ACI-08.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += '<a class="linkFont" href="app/EFM/efm.html"  target="_blank">';
    result += 'EFM';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Equivalent Frame Method for the Flat Slab.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += '<a class="linkFont" href="others/SlabWithBeam/SlabWithBeam.html"  target="_blank">';
    result += 'SlabWBeam';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Slab Desing based on Japanese Standard. (File Exposure is not available now)";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += '<a class="linkFont" href="app/ptSlab/ptSlab.html"  target="_blank">';
    result += 'ptSlab';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Two way post tensioned slab by Equivalent Frame Method for the Flat Slab.";
//    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Wall</h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////


    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/shearWall/shearWall.html"  target="_blank">';
    result += 'WallCap';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Capacity of the reinforcement concrete wall based on ACI-08.";

    result += "</td>";
    result += "</tr>";
    //////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Joint </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////


    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/rcJoint/rcJoint.html"  target="_blank">';
    result += 'rcJoint';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Joint of Reinforced Concrete for the Special Moment Frame.";
//    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Others </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += 'Anchor';

    result += "</td><td>";
    result += "Breakout shear strength in only shear force based on ACI-08.";

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += '<a href="app/shearAnchor/shearAnchor.html" target="_blank">';
    result += '<button>shearAnchor</button>';
    result += '</a> &nbsp;';

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += "Breakout strength, pullout strength and concrete side-face blowout strength in only tension force based on ACI-08.";

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += '<a href="app/tensionAnchor/tenAnchor.html" target="_blank">';
    result += '<button>tensionAnchor</button>';
    result += '</a> &nbsp;';

    result += "<hr>";

    result += "</td>";
    result += "</tr>";



    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;
}

////////////////////////////////////////////////////////////////////////
function Ref() {
    var result = "";
    result += '<h1>';
    result += 'Under Construction....';
    result += '</h1>';

    result += "<hr>";

    document.getElementById('home').innerHTML = result;
}

function euroCode(){

    var result = "";
    result += "<h1> Euro Code/ Vietnam </h1>";
    result += "<hr>";

    result += "<h2> Seismic Load</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="euro/seEuro/seEuro.html" target="_blank">';
    result += 'SeismicEuro';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Seismic load estimation by euro code. TCVN(Vietnam Code) is based on Euro Code";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="pile/pileBearing/pileBear.html" target="_blank">';
    result += 'PileBearing';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Pile Evaluation for driven pile based on Japanese standard";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;

}

function underCon(){
    var result = "";
    result += '<h1>';
    result += 'Sorry, Under Construction...';
    result += '</h1>';
    result += '<p>';
    result += '<a class="linkFont" href="index.html">';
    result += 'Back to Home';
    result += '</a><br  />';
    result += '</p>';
    document.getElementById('home').innerHTML = result;
}

function bigLink(){
    var gui = require('nw.gui');
    var link = 'myanmarApp/myanmarApp.html';
    var win = gui.Window.open (link, {
	position: 'center',
	width: 720,
	height: 800
    });
//    win.on ('loaded', function(){
	// the native onload event has just occurred
//	var document = win.window.document;
//    });
}

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
	var myDropdown = document.getElementById("myDropdown");
	if (myDropdown.classList.contains('show')) {
	    myDropdown.classList.remove('show');
	}
    }
}


function Projects(){

    var result = "";
    result += "<h1> Projects </h2>";
    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> SimpGet </h2>";


    result += "<p>";
    result += " SimpGet can get the result of the simple calculation for the verification of the design.";
    result += "</p>";
    result += "<p>";
    result += " Now, only Thailand material would be available. Pls, check the online demo.";
    result += " GUI application also can be downloaded. Saving data function would be added";
    result += "</p>";
    result += "<p>";

    result += " For other countries, under construction...";
    result += "</p>";

    result += "<img src=\"image/simpGet.png\" width=\"50%\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";

    result += "</td><td>";
    result += 'SimpGetRC: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";
    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2017/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> MnGen </h2>";

    result += "<p>";
    result += " MnGen makes M-N interaction diagram for the RC column based on ACI.";
    result += "</p>";

    result += "<p>";
    result += "<tr><td>";
    result += 'Available Material: &nbsp;';
    result += "</td><td>";
    result += 'JIS/Japan&nbsp;';
    result += "</td>";
    result += "</tr>";
    result += "</p>";

    result += "<img src=\"image/MnGen_ScreenShot.png\" width=\"50%\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";
    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2018/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> MoveLoad </h2>";


    result += "<p>";
    result += " MoveLoad calculates the maximamu stress on the single beam due to the moving load, such as crane girder";
    result += "</p>";

    result += "<img src=\"image/MoveLoad.png\" width=\"50%\">";
    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a onclick=underCon() target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";
    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2018/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";
    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> SoilSettle</h2>";

    result += "<p>";
    result += " You can get the immediate soil settlmenet and consolidation settlement";
    result += "</p>";

    result += "<p>";
    result += "Under Construction.";
    result += "</p>";

    result += "<hr>";
    ////////////////////////////////////////////////////////////////////////


    document.getElementById('home').innerHTML = result;

}
