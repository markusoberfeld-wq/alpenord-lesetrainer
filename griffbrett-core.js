/* AlpeNord Griffbrett Core V0.16
   Gemeinsame, DOM-unabhängige Daten und Tonlogik für Diskant/Bass.
   Gedacht zur Wiederverwendung in Einzelton, Akkorde, Kadenzen, Tonleitern,
   Übungen und Stücke.
*/
(()=>{
  const MAP={"1":{"druck":56,"zug":63},"2":{"druck":73,"zug":73},"3":{"druck":63,"zug":58},"4":{"druck":74,"zug":68},"5":{"druck":70,"zug":75},"6":{"druck":75,"zug":72},"7":{"druck":82,"zug":80},"8":{"druck":86,"zug":84},"9":{"druck":87,"zug":87},"10":{"druck":85,"zug":78},"11":{"druck":66,"zug":66},"12":{"druck":57,"zug":60},"13":{"druck":60,"zug":64},"14":{"druck":65,"zug":67},"15":{"druck":69,"zug":70},"16":{"druck":72,"zug":74},"17":{"druck":77,"zug":76},"18":{"druck":81,"zug":79},"19":{"druck":84,"zug":82},"20":{"druck":89,"zug":86},"21":{"druck":93,"zug":88},"22":{"druck":52,"zug":55},"23":{"druck":55,"zug":59},"24":{"druck":60,"zug":62},"25":{"druck":64,"zug":65},"26":{"druck":67,"zug":69},"27":{"druck":72,"zug":71},"28":{"druck":76,"zug":74},"29":{"druck":79,"zug":77},"30":{"druck":84,"zug":81},"31":{"druck":88,"zug":83}};
  const G={18:{L:[{x:424.56,y:351.58},{x:412.58,y:468.34},{x:404.51,y:585.98},{x:400.28,y:710.59},{x:400.33,y:828.97},{x:404.91,y:959.84},{x:412.68,y:1073.20},{x:424.67,y:1193.04},{x:439.84,y:1308.56}],R:[{x:533.93,y:291.45},{x:523.44,y:412.54},{x:515.92,y:531.86},{x:511.35,y:650.30},{x:509.83,y:773.85},{x:511.50,y:887.68},{x:516.47,y:1005.25},{x:524.79,y:1121.94},{x:536.64,y:1238.63}]},24:{L:[{x:446.88,y:192.89},{x:432.03,y:303.79},{x:417.17,y:416.64},{x:407.26,y:527.54},{x:400.33,y:640.40},{x:400.33,y:756.15},{x:401.32,y:861.04},{x:407.26,y:972.92},{x:417.17,y:1090.57},{x:424.10,y:1201.47},{x:437.97,y:1318.15},{x:462.75,y:1431.83}],R:[{x:551.90,y:140.00},{x:536.06,y:250.90},{x:528.14,y:364.75},{x:519.23,y:474.67},{x:513.29,y:588.51},{x:509.33,y:701.37},{x:511.31,y:817.15},{x:515.27,y:929.03},{x:516.26,y:1042.86},{x:529.13,y:1157.68},{x:541.02,y:1273.48},{x:557.85,y:1384.38}]}};
  const BASS_NOTES={1:'A',2:'D',3:'G',4:'C',5:'F',6:'B',7:'Es',8:'As',9:'Des',10:'Ges',11:'H',12:'E'};
  const NOTE_PC={'C':0,'Des':1,'D':2,'Es':3,'E':4,'F':5,'Ges':6,'G':7,'As':8,'A':9,'B':10,'H':11};
  const PC_NAMES=['c','des/cis','d','es/dis','e','f','ges/fis','g','as/gis','a','b/ais','h'];
  const ALT_NAME_PAIRS={1:['Des','Cis'],3:['Es','Dis'],6:['Ges','Fis'],8:['As','Gis'],10:['B','Ais']};
  const BASS_KEY_NAMES_FLAT={0:'C',1:'Des',2:'D',3:'Es',4:'E',5:'F',6:'Ges',7:'G',8:'As',9:'A',10:'B',11:'H'};
  const CHORDS={1:[49,52,57],2:[45,50,54],3:[47,50,55],4:[48,52,55],5:[48,53,57],6:[46,50,53],7:[46,51,55],8:[48,51,56],9:[49,53,56],10:[46,49,54],11:[47,51,54],12:[47,52,56]};

  const pc=m=>((Number(m)%12)+12)%12;
  function displayMidi(written,tuningShift=0,mode='written'){return Number(written)+(mode==='sounding'?Number(tuningShift):0)}
  function writtenFromDisplay(shown,tuningShift=0,mode='written'){return Number(shown)-(mode==='sounding'?Number(tuningShift):0)}
  function diskantWrittenMidi(key,direction,{crossTone1=56,crossTone10=78}={}){const k=String(key);if(k==='1'&&direction==='druck')return Number(crossTone1);if(k==='10'&&direction==='zug')return Number(crossTone10);return Number(MAP[k]?.[direction]);}
  function midiName(m){m=Number(m);const p=pc(m),oct=Math.floor(m/12)-1,suf=oct<=2?'':"'".repeat(Math.max(0,oct-3));let n=PC_NAMES[p];if(oct<=2)n=n.charAt(0).toUpperCase()+n.slice(1);return n+suf}
  function bassDisplayNameFromMidi(midi){const p=pc(midi);if(p===6)return 'Ges / Fis';const flatAlt={1:'Des',3:'Es',8:'As',10:'B'};const plain={0:'C',2:'D',4:'E',5:'F',7:'G',9:'A',11:'H'};return flatAlt[p]||plain[p]||midiName(midi)}
  function bassChordDisplayNameFromMidi(midi){const p=pc(midi);if(p===6)return 'Ges-Dur / Fis-Dur';const base=bassDisplayNameFromMidi(midi);return base+'-Dur'}
  function bassMidi(n){let m=36+NOTE_PC[BASS_NOTES[n]];while(m<40)m+=12;while(m>52)m-=12;return m}
  function bassKeyLabel(n,rowName,tuningShift=0,mode='written'){const shown=displayMidi(bassMidi(n),tuningShift,mode);const name=BASS_KEY_NAMES_FLAT[pc(shown)]||BASS_NOTES[n];return rowName==='A'?name:name.toLowerCase()}
  function rowLabels(mode,variant){if(mode===18)return [9,8,7,6,5,4,3,2,1];return variant==='top'?[10,9,8,7,6,5,4,3,2,1,12,11]:[9,8,7,6,5,4,3,2,1,12,11,10]}
  function bassNotationMidi(n,isChord,tuningShift=0,mode='written'){let ground=displayMidi(bassMidi(n),tuningShift,mode);while(ground>50)ground-=12;return isChord?ground+12:ground}
  function chordMidis(n){let v=CHORDS[n].slice();for(let r=0;r<2;r++)v=[v[1],v[2],v[0]+12];return v}
  function matchingDiskantKeys(writtenMidi,direction,cross={}){return Object.keys(MAP).filter(k=>diskantWrittenMidi(k,direction,cross)===Number(writtenMidi))}

  const INTERVALS=[
    {value:0,label:'Prime',short:'Prime'},
    {value:1,label:'kleine Sekunde',short:'kl. 2'},
    {value:2,label:'grosse Sekunde',short:'gr. 2'},
    {value:3,label:'kleine Terz',short:'kl. 3'},
    {value:4,label:'grosse Terz',short:'gr. 3'},
    {value:5,label:'Quarte',short:'4'},
    {value:6,label:'Tritonus',short:'Tritonus'},
    {value:7,label:'Quinte',short:'5'},
    {value:8,label:'kleine Sexte',short:'kl. 6'},
    {value:9,label:'grosse Sexte',short:'gr. 6'},
    {value:10,label:'kleine Septime',short:'kl. 7'},
    {value:11,label:'grosse Septime',short:'gr. 7'},
    {value:12,label:'Oktave',short:'8'}
  ];
  function intervalTargetMidi(baseMidi,semitones,intervalDirection='up'){return Number(baseMidi)+(intervalDirection==='down'?-1:1)*Number(semitones)}

  window.AlpeNordGriffbrett={
    version:'0.17',MAP,G,BASS_NOTES,NOTE_PC,PC_NAMES,ALT_NAME_PAIRS,BASS_KEY_NAMES_FLAT,CHORDS,
    displayMidi,writtenFromDisplay,diskantWrittenMidi,midiName,bassDisplayNameFromMidi,
    bassChordDisplayNameFromMidi,bassMidi,bassKeyLabel,rowLabels,bassNotationMidi,chordMidis,matchingDiskantKeys,INTERVALS,intervalTargetMidi
  };
})();
