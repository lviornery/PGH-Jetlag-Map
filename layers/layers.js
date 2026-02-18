var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> ALEPPO<br />\
    <img src="styles/legend/_1_1.png" /> ASPINWALL<br />\
    <img src="styles/legend/_1_2.png" /> AVALON<br />\
    <img src="styles/legend/_1_3.png" /> BALDWIN<br />\
    <img src="styles/legend/_1_4.png" /> BELL ACRES<br />\
    <img src="styles/legend/_1_5.png" /> BELLEVUE<br />\
    <img src="styles/legend/_1_6.png" /> BEN AVON<br />\
    <img src="styles/legend/_1_7.png" /> BEN AVON HEIGHTS<br />\
    <img src="styles/legend/_1_8.png" /> BETHEL PARK<br />\
    <img src="styles/legend/_1_9.png" /> BLAWNOX<br />\
    <img src="styles/legend/_1_10.png" /> BRACKENRIDGE<br />\
    <img src="styles/legend/_1_11.png" /> BRADDOCK<br />\
    <img src="styles/legend/_1_12.png" /> BRADDOCK HILLS<br />\
    <img src="styles/legend/_1_13.png" /> BRADFORD WOODS<br />\
    <img src="styles/legend/_1_14.png" /> BRENTWOOD<br />\
    <img src="styles/legend/_1_15.png" /> BRIDGEVILLE<br />\
    <img src="styles/legend/_1_16.png" /> CARNEGIE<br />\
    <img src="styles/legend/_1_17.png" /> CASTLE SHANNON<br />\
    <img src="styles/legend/_1_18.png" /> CHALFANT<br />\
    <img src="styles/legend/_1_19.png" /> CHESWICK<br />\
    <img src="styles/legend/_1_20.png" /> CHURCHILL<br />\
    <img src="styles/legend/_1_21.png" /> CLAIRTON<br />\
    <img src="styles/legend/_1_22.png" /> COLLIER<br />\
    <img src="styles/legend/_1_23.png" /> CORAOPOLIS<br />\
    <img src="styles/legend/_1_24.png" /> CRAFTON<br />\
    <img src="styles/legend/_1_25.png" /> CRESCENT<br />\
    <img src="styles/legend/_1_26.png" /> DORMONT<br />\
    <img src="styles/legend/_1_27.png" /> DRAVOSBURG<br />\
    <img src="styles/legend/_1_28.png" /> DUQUESNE<br />\
    <img src="styles/legend/_1_29.png" /> EAST DEER<br />\
    <img src="styles/legend/_1_30.png" /> EAST MCKEESPORT<br />\
    <img src="styles/legend/_1_31.png" /> EAST PITTSBURGH<br />\
    <img src="styles/legend/_1_32.png" /> EDGEWOOD<br />\
    <img src="styles/legend/_1_33.png" /> EDGEWORTH<br />\
    <img src="styles/legend/_1_34.png" /> ELIZABETH<br />\
    <img src="styles/legend/_1_35.png" /> EMSWORTH<br />\
    <img src="styles/legend/_1_36.png" /> ETNA<br />\
    <img src="styles/legend/_1_37.png" /> FAWN<br />\
    <img src="styles/legend/_1_38.png" /> FINDLAY<br />\
    <img src="styles/legend/_1_39.png" /> FOREST HILLS<br />\
    <img src="styles/legend/_1_40.png" /> FORWARD<br />\
    <img src="styles/legend/_1_41.png" /> FOX CHAPEL<br />\
    <img src="styles/legend/_1_42.png" /> FRANKLIN PARK<br />\
    <img src="styles/legend/_1_43.png" /> FRAZER<br />\
    <img src="styles/legend/_1_44.png" /> GLASSPORT<br />\
    <img src="styles/legend/_1_45.png" /> GLEN OSBORNE<br />\
    <img src="styles/legend/_1_46.png" /> GLENFIELD<br />\
    <img src="styles/legend/_1_47.png" /> GREEN TREE<br />\
    <img src="styles/legend/_1_48.png" /> HAMPTON<br />\
    <img src="styles/legend/_1_49.png" /> HARMAR<br />\
    <img src="styles/legend/_1_50.png" /> HARRISON<br />\
    <img src="styles/legend/_1_51.png" /> HAYSVILLE<br />\
    <img src="styles/legend/_1_52.png" /> HEIDELBERG<br />\
    <img src="styles/legend/_1_53.png" /> HOMESTEAD<br />\
    <img src="styles/legend/_1_54.png" /> INDIANA<br />\
    <img src="styles/legend/_1_55.png" /> INGRAM<br />\
    <img src="styles/legend/_1_56.png" /> JEFFERSON HILLS<br />\
    <img src="styles/legend/_1_57.png" /> KENNEDY<br />\
    <img src="styles/legend/_1_58.png" /> KILBUCK<br />\
    <img src="styles/legend/_1_59.png" /> LEET<br />\
    <img src="styles/legend/_1_60.png" /> LEETSDALE<br />\
    <img src="styles/legend/_1_61.png" /> LIBERTY<br />\
    <img src="styles/legend/_1_62.png" /> LINCOLN<br />\
    <img src="styles/legend/_1_63.png" /> MARSHALL<br />\
    <img src="styles/legend/_1_64.png" /> MCCANDLESS<br />\
    <img src="styles/legend/_1_65.png" /> MCDONALD<br />\
    <img src="styles/legend/_1_66.png" /> MCKEES ROCKS<br />\
    <img src="styles/legend/_1_67.png" /> MCKEESPORT<br />\
    <img src="styles/legend/_1_68.png" /> MILLVALE<br />\
    <img src="styles/legend/_1_69.png" /> MONROEVILLE<br />\
    <img src="styles/legend/_1_70.png" /> MOON<br />\
    <img src="styles/legend/_1_71.png" /> MOUNT LEBANON<br />\
    <img src="styles/legend/_1_72.png" /> MOUNT OLIVER<br />\
    <img src="styles/legend/_1_73.png" /> MUNHALL<br />\
    <img src="styles/legend/_1_74.png" /> NEVILLE<br />\
    <img src="styles/legend/_1_75.png" /> NORTH BRADDOCK<br />\
    <img src="styles/legend/_1_76.png" /> NORTH FAYETTE<br />\
    <img src="styles/legend/_1_77.png" /> NORTH VERSAILLES<br />\
    <img src="styles/legend/_1_78.png" /> O\'HARA<br />\
    <img src="styles/legend/_1_79.png" /> OAKDALE<br />\
    <img src="styles/legend/_1_80.png" /> OAKMONT<br />\
    <img src="styles/legend/_1_81.png" /> OHIO<br />\
    <img src="styles/legend/_1_82.png" /> PENN HILLS<br />\
    <img src="styles/legend/_1_83.png" /> PENNSBURY VILLAGE<br />\
    <img src="styles/legend/_1_84.png" /> PINE<br />\
    <img src="styles/legend/_1_85.png" /> PITCAIRN<br />\
    <img src="styles/legend/_1_86.png" /> PITTSBURGH<br />\
    <img src="styles/legend/_1_87.png" /> PLEASANT HILLS<br />\
    <img src="styles/legend/_1_88.png" /> PLUM<br />\
    <img src="styles/legend/_1_89.png" /> PORT VUE<br />\
    <img src="styles/legend/_1_90.png" /> RANKIN<br />\
    <img src="styles/legend/_1_91.png" /> RESERVE<br />\
    <img src="styles/legend/_1_92.png" /> RICHLAND<br />\
    <img src="styles/legend/_1_93.png" /> ROBINSON<br />\
    <img src="styles/legend/_1_94.png" /> ROSS<br />\
    <img src="styles/legend/_1_95.png" /> ROSSLYN FARMS<br />\
    <img src="styles/legend/_1_96.png" /> SCOTT<br />\
    <img src="styles/legend/_1_97.png" /> SEWICKLEY<br />\
    <img src="styles/legend/_1_98.png" /> SEWICKLEY HEIGHTS<br />\
    <img src="styles/legend/_1_99.png" /> SEWICKLEY HILLS<br />\
    <img src="styles/legend/_1_100.png" /> SHALER<br />\
    <img src="styles/legend/_1_101.png" /> SHARPSBURG<br />\
    <img src="styles/legend/_1_102.png" /> SOUTH FAYETTE<br />\
    <img src="styles/legend/_1_103.png" /> SOUTH PARK<br />\
    <img src="styles/legend/_1_104.png" /> SOUTH VERSAILLES<br />\
    <img src="styles/legend/_1_105.png" /> SPRINGDALE<br />\
    <img src="styles/legend/_1_106.png" /> STOWE<br />\
    <img src="styles/legend/_1_107.png" /> SWISSVALE<br />\
    <img src="styles/legend/_1_108.png" /> TARENTUM<br />\
    <img src="styles/legend/_1_109.png" /> THORNBURG<br />\
    <img src="styles/legend/_1_110.png" /> TRAFFORD<br />\
    <img src="styles/legend/_1_111.png" /> TURTLE CREEK<br />\
    <img src="styles/legend/_1_112.png" /> UPPER ST. CLAIR<br />\
    <img src="styles/legend/_1_113.png" /> VERONA<br />\
    <img src="styles/legend/_1_114.png" /> VERSAILLES<br />\
    <img src="styles/legend/_1_115.png" /> WALL<br />\
    <img src="styles/legend/_1_116.png" /> WEST DEER<br />\
    <img src="styles/legend/_1_117.png" /> WEST ELIZABETH<br />\
    <img src="styles/legend/_1_118.png" /> WEST HOMESTEAD<br />\
    <img src="styles/legend/_1_119.png" /> WEST MIFFLIN<br />\
    <img src="styles/legend/_1_120.png" /> WEST VIEW<br />\
    <img src="styles/legend/_1_121.png" /> WHITAKER<br />\
    <img src="styles/legend/_1_122.png" /> WHITE OAK<br />\
    <img src="styles/legend/_1_123.png" /> WHITEHALL<br />\
    <img src="styles/legend/_1_124.png" /> WILKINS<br />\
    <img src="styles/legend/_1_125.png" /> WILKINSBURG<br />\
    <img src="styles/legend/_1_126.png" /> WILMERDING<br />\
    <img src="styles/legend/_1_127.png" /> <br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_2_0.png" /> Allegheny Center<br />\
    <img src="styles/legend/_2_1.png" /> Allegheny West<br />\
    <img src="styles/legend/_2_2.png" /> Allentown<br />\
    <img src="styles/legend/_2_3.png" /> Arlington<br />\
    <img src="styles/legend/_2_4.png" /> Arlington Heights<br />\
    <img src="styles/legend/_2_5.png" /> Banksville<br />\
    <img src="styles/legend/_2_6.png" /> Bedford Dwellings<br />\
    <img src="styles/legend/_2_7.png" /> Beechview<br />\
    <img src="styles/legend/_2_8.png" /> Beltzhoover<br />\
    <img src="styles/legend/_2_9.png" /> Bloomfield<br />\
    <img src="styles/legend/_2_10.png" /> Bluff<br />\
    <img src="styles/legend/_2_11.png" /> Bon Air<br />\
    <img src="styles/legend/_2_12.png" /> Brighton Heights<br />\
    <img src="styles/legend/_2_13.png" /> Brookline<br />\
    <img src="styles/legend/_2_14.png" /> California-Kirkbride<br />\
    <img src="styles/legend/_2_15.png" /> Carrick<br />\
    <img src="styles/legend/_2_16.png" /> Central Business District<br />\
    <img src="styles/legend/_2_17.png" /> Central Lawrenceville<br />\
    <img src="styles/legend/_2_18.png" /> Central Northside<br />\
    <img src="styles/legend/_2_19.png" /> Central Oakland<br />\
    <img src="styles/legend/_2_20.png" /> Chartiers City<br />\
    <img src="styles/legend/_2_21.png" /> Chateau<br />\
    <img src="styles/legend/_2_22.png" /> Crafton Heights<br />\
    <img src="styles/legend/_2_23.png" /> Crawford-Roberts<br />\
    <img src="styles/legend/_2_24.png" /> Duquesne Heights<br />\
    <img src="styles/legend/_2_25.png" /> East Allegheny<br />\
    <img src="styles/legend/_2_26.png" /> East Carnegie<br />\
    <img src="styles/legend/_2_27.png" /> East Hills<br />\
    <img src="styles/legend/_2_28.png" /> East Liberty<br />\
    <img src="styles/legend/_2_29.png" /> Elliott<br />\
    <img src="styles/legend/_2_30.png" /> Esplen<br />\
    <img src="styles/legend/_2_31.png" /> Fairywood<br />\
    <img src="styles/legend/_2_32.png" /> Fineview<br />\
    <img src="styles/legend/_2_33.png" /> Friendship<br />\
    <img src="styles/legend/_2_34.png" /> Garfield<br />\
    <img src="styles/legend/_2_35.png" /> Glen Hazel<br />\
    <img src="styles/legend/_2_36.png" /> Greenfield<br />\
    <img src="styles/legend/_2_37.png" /> Hays<br />\
    <img src="styles/legend/_2_38.png" /> Hazelwood<br />\
    <img src="styles/legend/_2_39.png" /> Highland Park<br />\
    <img src="styles/legend/_2_40.png" /> Homewood North<br />\
    <img src="styles/legend/_2_41.png" /> Homewood South<br />\
    <img src="styles/legend/_2_42.png" /> Homewood West<br />\
    <img src="styles/legend/_2_43.png" /> Knoxville<br />\
    <img src="styles/legend/_2_44.png" /> Larimer<br />\
    <img src="styles/legend/_2_45.png" /> Lincoln Place<br />\
    <img src="styles/legend/_2_46.png" /> Lincoln-Lemington-Belmar<br />\
    <img src="styles/legend/_2_47.png" /> Lower Lawrenceville<br />\
    <img src="styles/legend/_2_48.png" /> Manchester<br />\
    <img src="styles/legend/_2_49.png" /> Marshall-Shadeland<br />\
    <img src="styles/legend/_2_50.png" /> Middle Hill<br />\
    <img src="styles/legend/_2_51.png" /> Morningside<br />\
    <img src="styles/legend/_2_52.png" /> Mount Washington<br />\
    <img src="styles/legend/_2_53.png" /> Mt. Oliver<br />\
    <img src="styles/legend/_2_54.png" /> New Homestead<br />\
    <img src="styles/legend/_2_55.png" /> North Oakland<br />\
    <img src="styles/legend/_2_56.png" /> North Shore<br />\
    <img src="styles/legend/_2_57.png" /> Northview Heights<br />\
    <img src="styles/legend/_2_58.png" /> Oakwood<br />\
    <img src="styles/legend/_2_59.png" /> Overbrook<br />\
    <img src="styles/legend/_2_60.png" /> Perry North<br />\
    <img src="styles/legend/_2_61.png" /> Perry South<br />\
    <img src="styles/legend/_2_62.png" /> Point Breeze<br />\
    <img src="styles/legend/_2_63.png" /> Point Breeze North<br />\
    <img src="styles/legend/_2_64.png" /> Polish Hill<br />\
    <img src="styles/legend/_2_65.png" /> Regent Square<br />\
    <img src="styles/legend/_2_66.png" /> Ridgemont<br />\
    <img src="styles/legend/_2_67.png" /> Shadyside<br />\
    <img src="styles/legend/_2_68.png" /> Sheraden<br />\
    <img src="styles/legend/_2_69.png" /> South Oakland<br />\
    <img src="styles/legend/_2_70.png" /> South Side Flats<br />\
    <img src="styles/legend/_2_71.png" /> South Shore<br />\
    <img src="styles/legend/_2_72.png" /> South Side Slopes<br />\
    <img src="styles/legend/_2_73.png" /> Spring Garden<br />\
    <img src="styles/legend/_2_74.png" /> Spring Hill-City View<br />\
    <img src="styles/legend/_2_75.png" /> Squirrel Hill North<br />\
    <img src="styles/legend/_2_76.png" /> Squirrel Hill South<br />\
    <img src="styles/legend/_2_77.png" /> St. Clair<br />\
    <img src="styles/legend/_2_78.png" /> Stanton Heights<br />\
    <img src="styles/legend/_2_79.png" /> Strip District<br />\
    <img src="styles/legend/_2_80.png" /> Summer Hill<br />\
    <img src="styles/legend/_2_81.png" /> Swisshelm Park<br />\
    <img src="styles/legend/_2_82.png" /> Terrace Village<br />\
    <img src="styles/legend/_2_83.png" /> Troy Hill<br />\
    <img src="styles/legend/_2_84.png" /> Upper Hill<br />\
    <img src="styles/legend/_2_85.png" /> Upper Lawrenceville<br />\
    <img src="styles/legend/_2_86.png" /> West End<br />\
    <img src="styles/legend/_2_87.png" /> West Oakland<br />\
    <img src="styles/legend/_2_88.png" /> Westwood<br />\
    <img src="styles/legend/_2_89.png" /> Windgap<br />\
    <img src="styles/legend/_2_90.png" /> <br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> BUS<br />\
    <img src="styles/legend/_3_1.png" /> INCLINE<br />\
    <img src="styles/legend/_3_2.png" /> RAIL<br />\
    <img src="styles/legend/_3_3.png" /> <br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'MUNICIPALITY': 'MUNICIPALITY', });
lyr__2.set('fieldAliases', {'NEIGHBORHOOD': 'NEIGHBORHOOD', 'MUNICIPALITY': 'MUNICIPALITY', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'route_code': 'route_code', 'route_name': 'route_name', 'mode': 'mode', 'direction': 'direction', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'stop_name': 'stop_name', 'route_code': 'route_code', });
lyr__1.set('fieldImages', {'MUNICIPALITY': 'TextEdit', });
lyr__2.set('fieldImages', {'NEIGHBORHOOD': 'TextEdit', 'MUNICIPALITY': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'route_code': 'TextEdit', 'route_name': 'TextEdit', 'mode': 'TextEdit', 'direction': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'stop_name': 'TextEdit', 'route_code': 'TextEdit', });
lyr__1.set('fieldLabels', {'MUNICIPALITY': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'NEIGHBORHOOD': 'inline label - always visible', 'MUNICIPALITY': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'fid': 'hidden field', 'route_code': 'inline label - always visible', 'route_name': 'inline label - always visible', 'mode': 'inline label - always visible', 'direction': 'inline label - always visible', });
lyr__4.set('fieldLabels', {'fid': 'hidden field', 'stop_name': 'inline label - always visible', 'route_code': 'inline label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});