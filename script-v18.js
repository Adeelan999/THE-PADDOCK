const teams = [
  {name:"McLaren", tag:"MCL", color:"#ff8700", drivers:[
    {name:"Lando Norris", number:1, nationality:"สหราชอาณาจักร", dob:"13 พฤศจิกายน 1999", debut:"2019", titles:1,
     bio:"Lando Norris เติบโตจากสายการแข่งขันรถยนต์เยาวชนของสหราชอาณาจักรและไต่ระดับผ่านรายการ junior ก่อนเข้าสู่ Formula 1 กับ McLaren ในปี 2019 เขาคว้าชัยชนะครั้งแรกที่ Miami Grand Prix 2024 และคว้าแชมป์โลกนักขับครั้งแรกในฤดูกาล 2025 ก่อนกลับมาป้องกันแชมป์กับ McLaren ในปี 2026.",
     highlights:["แชมป์โลก F1 ปี 2025","ชนะ F1 ครั้งแรกที่ Miami 2024","เป็นนักขับ McLaren ตั้งแต่ F1 debut"]},
    {name:"Oscar Piastri", number:81, nationality:"ออสเตรเลีย", dob:"6 เมษายน 2001", debut:"2023", titles:0,
     bio:"Oscar Piastri เป็นแชมป์ Formula 2 ปี 2021 และ Formula 3 ปี 2020 ก่อนก้าวสู่ F1 กับ McLaren ในปี 2023 เขาเป็นหนึ่งในนักขับรุ่นใหม่ที่เติบโตเร็วที่สุดและกลายเป็นคู่แข่งสำคัญในการลุ้นแชมป์ตั้งแต่ช่วงต้นอาชีพ.",
     highlights:["แชมป์ FIA Formula 2 ปี 2021","ชนะ F1 ครั้งแรกที่ Hungary 2024","ร่วมทีม McLaren กับ Norris ตั้งแต่ 2023"]}]},
  {name:"Ferrari", tag:"FER", color:"#e80000", drivers:[
    {name:"Charles Leclerc", number:16, nationality:"โมนาโก", dob:"16 ตุลาคม 1997", debut:"2018", titles:0,
     bio:"Charles Leclerc ผ่าน Ferrari Driver Academy และขึ้น F1 กับ Sauber ในปี 2018 ก่อนย้ายสู่ Ferrari ในปี 2019 เขาคว้าชัยชนะหลายสนามและกลายเป็นหนึ่งในนักขับหลักของทีมจาก Maranello.",
     highlights:["เข้าสู่ Ferrari ตั้งแต่ฤดูกาล 2019","คว้า pole positions จำนวนมากในยุคปัจจุบัน","เป็นนักขับโมนาโกคนสำคัญของ F1"]},
    {name:"Lewis Hamilton", number:44, nationality:"สหราชอาณาจักร", dob:"7 มกราคม 1985", debut:"2007", titles:7,
     bio:"Lewis Hamilton เปิดตัว F1 กับ McLaren ในปี 2007 และคว้าแชมป์โลกครั้งแรกในปีถัดมา ก่อนสร้างยุคแห่งความสำเร็จกับ Mercedes เขาคือหนึ่งในนักขับที่ประสบความสำเร็จที่สุดในประวัติศาสตร์ F1 และย้ายสู่ Ferrari ในปี 2025.",
     highlights:["แชมป์โลก 7 สมัย","ชัยชนะ F1 มากกว่า 100 ครั้ง","เปิดตัวกับ Ferrari ในปี 2025"]}]},
  {name:"Mercedes", tag:"MER", color:"#00d2be", drivers:[
    {name:"George Russell", number:63, nationality:"สหราชอาณาจักร", dob:"15 กุมภาพันธ์ 1998", debut:"2019", titles:0,
     bio:"George Russell เป็นสมาชิก Mercedes junior programme และเปิดตัว F1 กับ Williams ในปี 2019 ก่อนย้ายมา Mercedes ในปี 2022 เขาเป็นนักขับที่โดดเด่นด้านความเร็วรอบเดียวและการต่อสู้ในสนาม.",
     highlights:["แชมป์ GP3 ปี 2017 และ F2 ปี 2018","ย้ายสู่ Mercedes ในปี 2022","คว้าชัยชนะ F1 ครั้งแรกที่ São Paulo 2022"]},
    {name:"Kimi Antonelli", number:12, nationality:"อิตาลี", dob:"25 สิงหาคม 2006", debut:"2025", titles:0,
     bio:"Kimi Antonelli เป็นดาวรุ่งจากอิตาลีที่ Mercedes ผลักดันผ่านโปรแกรม junior เขาเปิดตัว F1 ในปี 2025 และพัฒนาขึ้นอย่างรวดเร็ว จนกลายเป็นหนึ่งในนักขับชั้นนำของฤดูกาล 2026.",
     highlights:["แชมป์ Formula Regional Europe 2022","แชมป์ Formula 2 ปี 2024","คว้าชัยชนะ Italian GP 2026"]}]},
  {name:"Red Bull Racing", tag:"RBR", color:"#3671c6", drivers:[
    {name:"Max Verstappen", number:3, nationality:"เนเธอร์แลนด์", dob:"30 กันยายน 1997", debut:"2015", titles:4,
     bio:"Max Verstappen เปิดตัว F1 กับ Toro Rosso ในปี 2015 ด้วยวัยเพียง 17 ปี ก่อนย้ายสู่ Red Bull Racing และกลายเป็นแชมป์โลก 4 สมัยติดต่อกันในช่วง 2021–2024 เขาเป็นที่รู้จักจากความเร็ว การดวลแบบดุดัน และการควบคุมรถระดับสูง.",
     highlights:["แชมป์โลก 4 สมัย (2021–2024)","ชนะ F1 ครั้งแรกที่ Spanish GP 2016","กลับมาใช้หมายเลข 3 หลัง Lando Norris คว้าแชมป์ 2025"]},
    {name:"Isack Hadjar", number:6, nationality:"ฝรั่งเศส", dob:"28 กันยายน 2004", debut:"2025", titles:0,
     bio:"Isack Hadjar เป็นนักขับฝรั่งเศสจาก Red Bull Junior Team เขาเปิดตัว F1 กับ Racing Bulls ในปี 2025 ก่อนเลื่อนขึ้นสู่ Red Bull Racing ในฤดูกาล 2026 เพื่อจับคู่กับ Max Verstappen.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ปี 2025","เลื่อนขึ้น Red Bull Racing ในปี 2026"]}]},
  {name:"Racing Bulls", tag:"VCARB", color:"#6692ff", drivers:[
    {name:"Liam Lawson", number:30, nationality:"นิวซีแลนด์", dob:"11 กุมภาพันธ์ 2002", debut:"2023", titles:0,
     bio:"Liam Lawson เป็นนักขับจากนิวซีแลนด์ใน Red Bull driver programme เขาเคยทำหน้าที่แทนใน F1 ก่อนเข้าสู่ Racing Bulls แบบเต็มฤดูกาล และยังคงพัฒนาตัวเองในทีมสำหรับฤดูกาล 2026.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ในปี 2023","แข่งขันให้ Racing Bulls ในปี 2026"]},
    {name:"Arvid Lindblad", number:41, nationality:"สหราชอาณาจักร", dob:"8 สิงหาคม 2007", debut:"2026", titles:0,
     bio:"Arvid Lindblad เป็นดาวรุ่งจาก Red Bull Junior Team ที่ไต่ระดับจาก karting และ single-seaters อย่างรวดเร็ว เขาก้าวขึ้นสู่ F1 กับ Racing Bulls ในปี 2026 และเป็น rookie เต็มฤดูกาลของกริดปีนี้.",
     highlights:["เติบโตจาก Red Bull Junior Team","แชมป์ Formula 3 ปี 2025","F1 rookie เต็มฤดูกาลปี 2026"]}]},
  {name:"Alpine", tag:"ALP", color:"#0090ff", drivers:[
    {name:"Pierre Gasly", number:10, nationality:"ฝรั่งเศส", dob:"7 กุมภาพันธ์ 1996", debut:"2017", titles:0,
     bio:"Pierre Gasly เป็นแชมป์ GP2 ปี 2016 และเข้าสู่ F1 กับ Toro Rosso ในปี 2017 เขาคว้าชัยชนะที่ Monza ในปี 2020 ซึ่งเป็นหนึ่งในชัยชนะที่น่าจดจำที่สุดของยุคใหม่ และเป็นแกนหลักของ Alpine.",
     highlights:["แชมป์ GP2 ปี 2016","ชนะ Italian GP 2020","นักขับ Alpine ตั้งแต่ 2023"]},
    {name:"Franco Colapinto", number:43, nationality:"อาร์เจนตินา", dob:"27 พฤษภาคม 2003", debut:"2024", titles:0,
     bio:"Franco Colapinto เป็นนักขับอาร์เจนตินาที่ก้าวขึ้นมาจาก Williams Academy เขาเปิดตัว F1 ในช่วงปลายปี 2024 และได้ที่นั่ง Alpine ในปี 2025 ก่อนแข่งขันต่อในปี 2026.",
     highlights:["นักขับอาร์เจนตินาคนแรกใน F1 ในรอบหลายปี","เปิดตัว F1 ปี 2024","แข่งขันกับ Alpine ในปี 2026"]}]},
  {name:"Audi", tag:"AUD", color:"#d8d8d8", drivers:[
    {name:"Gabriel Bortoleto", number:5, nationality:"บราซิล", dob:"14 ตุลาคม 2004", debut:"2025", titles:0,
     bio:"Gabriel Bortoleto เป็นดาวรุ่งบราซิลที่คว้าแชมป์ Formula 3 ปี 2023 และ Formula 2 ปี 2024 ก่อนขึ้น F1 เขาเริ่มต้นกับ Sauber และเป็นส่วนหนึ่งของโครงการ Audi เมื่อทีมเข้าสู่ยุคใหม่ในปี 2026.",
     highlights:["แชมป์ FIA Formula 3 ปี 2023","แชมป์ FIA Formula 2 ปี 2024","เป็นนักขับ Audi ในปี 2026"]},
    {name:"Nico Hulkenberg", number:27, nationality:"เยอรมนี", dob:"19 สิงหาคม 1987", debut:"2010", titles:0,
     bio:"Nico Hulkenberg เป็นนักขับเยอรมันมากประสบการณ์ เปิดตัว F1 ในปี 2010 และสร้างชื่อจากความเร็วรอบควอลิฟายรวมถึงผลงาน endurance racing เขาเข้าสู่ยุค Audi หลัง Sauber เปลี่ยนชื่อทีมในปี 2026.",
     highlights:["F1 debut ปี 2010","คว้า pole position ที่ Brazilian GP 2010","ประสบการณ์ F1 มากกว่าทศวรรษ"]}]},
  {name:"Williams", tag:"WIL", color:"#1868db", drivers:[
    {name:"Carlos Sainz", number:55, nationality:"สเปน", dob:"1 กันยายน 1994", debut:"2015", titles:0,
     bio:"Carlos Sainz เป็นนักขับสเปนที่ผ่าน Toro Rosso, Renault, McLaren และ Ferrari ก่อนย้ายสู่ Williams ในปี 2025 เขาโดดเด่นด้านความสม่ำเสมอ การอ่านเกม และความสามารถในการพัฒนารถ.",
     highlights:["F1 debut ปี 2015","ชนะ F1 ที่ Silverstone 2022","ย้ายสู่ Williams ในปี 2025"]},
    {name:"Alexander Albon", number:23, nationality:"ไทย", dob:"23 มีนาคม 1996", debut:"2019", titles:0,
     bio:"Alexander Albon เป็นนักขับไทย-อังกฤษที่เปิดตัว F1 กับ Toro Rosso ในปี 2019 และได้รับการเลื่อนสู่ Red Bull ในปีเดียวกัน ก่อนกลับมา F1 กับ Williams ในปี 2022 และกลายเป็นหัวใจสำคัญของทีม.",
     highlights:["F1 debut ปี 2019","ขึ้น Red Bull Racing ในปี 2019","นำทีม Williams ในยุคสร้างทีมใหม่"]}]},
  {name:"Cadillac", tag:"CAD", color:"#bcbcbc", drivers:[
    {name:"Sergio Perez", number:11, nationality:"เม็กซิโก", dob:"26 มกราคม 1990", debut:"2011", titles:0,
     bio:"Sergio Perez หรือ Checo เป็นนักขับเม็กซิโกที่มีประสบการณ์ยาวนานใน F1 เขาสร้างชื่อจากการจัดการยางและการแซง ก่อนกลับเข้าสู่กริดปี 2026 กับ Cadillac ซึ่งเป็นทีมใหม่ของ F1.",
     highlights:["F1 debut ปี 2011","ชนะ F1 ครั้งแรกที่ Sakhir 2020","กลับสู่กริดกับ Cadillac ในปี 2026"]},
    {name:"Valtteri Bottas", number:77, nationality:"ฟินแลนด์", dob:"28 สิงหาคม 1989", debut:"2013", titles:0,
     bio:"Valtteri Bottas เป็นนักขับฟินแลนด์ที่สร้างผลงานโดดเด่นกับ Williams และ Mercedes เขาคว้าชัยชนะหลายรายการและเป็นส่วนหนึ่งของยุคความสำเร็จของ Mercedes ก่อนกลับสู่กริดกับ Cadillac ในปี 2026.",
     highlights:["F1 debut ปี 2013","ชนะ F1 10 รายการ","รองแชมป์โลกปี 2019 และ 2020"]}]},
  {name:"Aston Martin", tag:"AMR", color:"#006f62", drivers:[
    {name:"Fernando Alonso", number:14, nationality:"สเปน", dob:"29 กรกฎาคม 1981", debut:"2001", titles:2,
     bio:"Fernando Alonso เป็นแชมป์โลก 2 สมัยจากปี 2005 และ 2006 และเป็นหนึ่งในนักขับที่มีประสบการณ์มากที่สุดในประวัติศาสตร์ F1 เขาผ่านหลายทีมระดับแถวหน้าและยังคงแข่งขันกับ Aston Martin ในปี 2026.",
     highlights:["แชมป์โลก 2 สมัย (2005, 2006)","ชนะ Le Mans 24 Hours สองครั้ง","หนึ่งในนักขับที่มีประสบการณ์มากที่สุดใน F1"]},
    {name:"Lance Stroll", number:18, nationality:"แคนาดา", dob:"29 ตุลาคม 1998", debut:"2017", titles:0,
     bio:"Lance Stroll เป็นนักขับแคนาดาที่เข้าสู่ F1 กับ Williams ในปี 2017 และคว้า podium ตั้งแต่ฤดูกาล rookie เขาเป็นนักขับหลักของ Aston Martin ตั้งแต่ทีมเปลี่ยนเข้าสู่แบรนด์ปัจจุบัน.",
     highlights:["F1 debut ปี 2017","podium ที่ Azerbaijan GP 2017","แข่งขันกับ Aston Martin ตั้งแต่ 2021"]}]},
  {name:"Haas F1 Team", tag:"HAS", color:"#b6b6b6", drivers:[
    {name:"Esteban Ocon", number:31, nationality:"ฝรั่งเศส", dob:"17 กันยายน 1996", debut:"2016", titles:0,
     bio:"Esteban Ocon เป็นนักขับฝรั่งเศสที่ผ่านโปรแกรม Mercedes junior และเปิดตัว F1 ในปี 2016 เขาคว้า podium และชัยชนะที่ Hungary 2021 ก่อนย้ายสู่ Haas ในปี 2025.",
     highlights:["F1 debut ปี 2016","คว้าชัยชนะ Hungarian GP 2021","เข้าร่วม Haas ในปี 2025"]},
    {name:"Oliver Bearman", number:87, nationality:"สหราชอาณาจักร", dob:"8 พฤษภาคม 2005", debut:"2024", titles:0,
     bio:"Oliver Bearman เป็นดาวรุ่งอังกฤษจาก Ferrari Driver Academy เขาเปิดตัว F1 แบบฉุกเฉินในปี 2024 และกลายเป็นนักขับเต็มฤดูกาลของ Haas ในปี 2025–2026.",
     highlights:["Ferrari Driver Academy","เปิดตัว F1 ปี 2024 กับ Ferrari","นักขับ Haas เต็มฤดูกาลตั้งแต่ 2025"]}]}
];


const races = [
  {round:1,country:'Australia',venue:'Melbourne',date:'2026-03-08',tz:'Australia/Melbourne',offset:'+11:00',fp1:'2026-03-06T01:30',fp2:'2026-03-06T05:00',fp3:'2026-03-07T01:30',qualifying:'2026-03-07T05:00',race:'2026-03-08T04:00',map:'6602.png'},
  {round:2,country:'China',venue:'Shanghai',date:'2026-03-15',tz:'Asia/Shanghai',offset:'+08:00',fp1:'2026-03-13T03:30',sq:'2026-03-13T07:30',sprint:'2026-03-14T03:00',qualifying:'2026-03-14T07:00',race:'2026-03-15T07:00',map:'6603.webp',type:'SPRINT'},
  {round:3,country:'Japan',venue:'Suzuka',date:'2026-03-29',tz:'Asia/Tokyo',offset:'+09:00',fp1:'2026-03-27T11:30',fp2:'2026-03-27T15:00',fp3:'2026-03-28T11:30',qualifying:'2026-03-28T15:00',race:'2026-03-29T14:00',map:'6604.webp'},
  {round:4,country:'Miami',venue:'Miami',date:'2026-05-03',tz:'America/New_York',offset:'-04:00',fp1:'2026-05-01T16:00',sq:'2026-05-01T20:30',sprint:'2026-05-02T16:00',qualifying:'2026-05-02T20:00',race:'2026-05-03T17:00',map:'6605.webp',type:'SPRINT'},
  {round:5,country:'Canada',venue:'Montreal',date:'2026-05-24',tz:'America/Toronto',offset:'-04:00',fp1:'2026-05-22T11:30',sq:'2026-05-22T15:30',sprint:'2026-05-23T11:00',qualifying:'2026-05-23T15:00',race:'2026-05-24T13:00',map:'6606.webp',type:'SPRINT'},
  {round:6,country:'Monaco',venue:'Monaco',date:'2026-06-07',tz:'Europe/Monaco',offset:'+02:00',fp1:'2026-06-05T11:30',fp2:'2026-06-05T15:00',fp3:'2026-06-06T10:30',qualifying:'2026-06-06T14:00',race:'2026-06-07T13:00',map:'6607.webp'},
  {round:7,country:'Spain',venue:'Barcelona-Catalunya',date:'2026-06-14',tz:'Europe/Madrid',offset:'+02:00',fp1:'2026-06-12T11:30',fp2:'2026-06-12T15:00',fp3:'2026-06-13T10:30',qualifying:'2026-06-13T14:00',race:'2026-06-14T13:00',map:'6608.webp'},
  {round:8,country:'Austria',venue:'Spielberg',date:'2026-06-28',tz:'Europe/Vienna',offset:'+02:00',fp1:'2026-06-26T11:30',fp2:'2026-06-26T15:00',fp3:'2026-06-27T10:30',qualifying:'2026-06-27T14:00',race:'2026-06-28T13:00',map:'6609.webp'},
  {round:9,country:'Great Britain',venue:'Silverstone',date:'2026-07-05',tz:'Europe/London',offset:'+01:00',fp1:'2026-07-03T11:30',sq:'2026-07-03T15:30',sprint:'2026-07-04T11:00',qualifying:'2026-07-04T15:00',race:'2026-07-05T14:00',map:'6610.webp',type:'SPRINT'},
  {round:10,country:'Belgium',venue:'Spa-Francorchamps',date:'2026-07-19',tz:'Europe/Brussels',offset:'+02:00',fp1:'2026-07-17T11:30',fp2:'2026-07-17T15:00',fp3:'2026-07-18T10:30',qualifying:'2026-07-18T14:00',race:'2026-07-19T13:00',map:'6611.webp'},
  {round:11,country:'Hungary',venue:'Budapest',date:'2026-07-26',tz:'Europe/Budapest',offset:'+02:00',fp1:'2026-07-24T11:30',fp2:'2026-07-24T15:00',fp3:'2026-07-25T10:30',qualifying:'2026-07-25T14:00',race:'2026-07-26T13:00',map:'6612.webp'},
  {round:12,country:'Netherlands',venue:'Zandvoort',date:'2026-08-23',tz:'Europe/Amsterdam',offset:'+02:00',fp1:'2026-08-21T11:30',sq:'2026-08-21T15:30',sprint:'2026-08-22T11:00',qualifying:'2026-08-22T15:00',race:'2026-08-23T13:00',map:'6613.webp',type:'SPRINT'},
  {round:13,country:'Italy',venue:'Monza',date:'2026-09-06',tz:'Europe/Rome',offset:'+02:00',fp1:'2026-09-04T11:30',fp2:'2026-09-04T15:00',fp3:'2026-09-05T10:30',qualifying:'2026-09-05T14:00',race:'2026-09-06T13:00',map:'6614.webp'},
  {round:14,country:'Spain',venue:'Madrid / Madring',date:'2026-09-13',tz:'Europe/Madrid',offset:'+02:00',fp1:'2026-09-11T11:30',fp2:'2026-09-11T15:00',fp3:'2026-09-12T10:30',qualifying:'2026-09-12T14:00',race:'2026-09-13T13:00',map:'6615.webp'},
  {round:15,country:'Azerbaijan',venue:'Baku',date:'2026-09-26',tz:'Asia/Baku',offset:'+04:00',fp1:'2026-09-24T12:30',fp2:'2026-09-24T16:00',fp3:'2026-09-25T12:30',qualifying:'2026-09-25T16:00',race:'2026-09-26T15:00',map:'6616.webp'},
  {round:16,country:'Bahrain',venue:'Sepang / Malaysia',date:'2026-10-04',tz:'Asia/Kuala_Lumpur',offset:'+08:00',fp1:'2026-10-02T04:30',fp2:'2026-10-02T08:00',fp3:'2026-10-03T04:30',qualifying:'2026-10-03T08:00',race:'2026-10-04T07:00',map:'6617.png'},
  {round:17,country:'Singapore',venue:'Marina Bay',date:'2026-10-11',tz:'Asia/Singapore',offset:'+08:00',fp1:'2026-10-09T08:30',sq:'2026-10-09T12:30',sprint:'2026-10-10T09:00',qualifying:'2026-10-10T13:00',race:'2026-10-11T12:00',map:'6618.webp',type:'SPRINT'},
  {round:18,country:'United States',venue:'Austin / COTA',date:'2026-10-25',tz:'America/Chicago',offset:'-05:00',fp1:'2026-10-23T17:30',fp2:'2026-10-23T21:00',fp3:'2026-10-24T17:30',qualifying:'2026-10-24T21:00',race:'2026-10-25T20:00',map:'6619.webp'},
  {round:19,country:'Mexico',venue:'Mexico City',date:'2026-11-01',tz:'America/Mexico_City',offset:'-06:00',fp1:'2026-10-30T18:30',fp2:'2026-10-30T22:00',fp3:'2026-10-31T17:30',qualifying:'2026-10-31T21:00',race:'2026-11-01T20:00',map:'6620.webp'},
  {round:20,country:'Brazil',venue:'São Paulo / Interlagos',date:'2026-11-08',tz:'America/Sao_Paulo',offset:'-03:00',fp1:'2026-11-06T15:30',fp2:'2026-11-06T19:00',fp3:'2026-11-07T14:30',qualifying:'2026-11-07T18:00',race:'2026-11-08T17:00',map:'6621.webp'},
  {round:21,country:'United States',venue:'Las Vegas',date:'2026-11-21',tz:'America/Los_Angeles',offset:'-08:00',fp1:'2026-11-20T00:30',fp2:'2026-11-20T04:00',fp3:'2026-11-21T00:30',qualifying:'2026-11-21T04:00',race:'2026-11-22T04:00',map:'6622.webp'},
  {round:22,country:'Qatar',venue:'Lusail',date:'2026-11-29',tz:'Asia/Qatar',offset:'+03:00',fp1:'2026-11-27T13:30',fp2:'2026-11-27T17:00',fp3:'2026-11-28T14:30',qualifying:'2026-11-28T18:00',race:'2026-11-29T16:00',map:'6623.png'},
  {round:23,country:'Abu Dhabi',venue:'Yas Marina',date:'2026-12-06',tz:'Asia/Dubai',offset:'+04:00',fp1:'2026-12-04T09:30',fp2:'2026-12-04T13:00',fp3:'2026-12-05T10:30',qualifying:'2026-12-05T14:00',race:'2026-12-06T13:00',map:'6624.webp'}
];
const circuitImages = Object.fromEntries(races.map(r=>[r.venue,`assets/circuits/IMG_${r.map}`]));
const driverImages={
'Lando Norris':'assets/drivers/lando-norris.webp','Oscar Piastri':'assets/drivers/oscar-piastri.webp','Charles Leclerc':'assets/drivers/charles-leclerc.webp','Lewis Hamilton':'assets/drivers/lewis-hamilton.webp','George Russell':'assets/drivers/george-russell.webp','Kimi Antonelli':'assets/drivers/kimi-antonelli.webp','Max Verstappen':'assets/drivers/max-verstappen.webp','Isack Hadjar':'assets/drivers/isack-hadjar.webp','Liam Lawson':'assets/drivers/liam-lawson.webp','Arvid Lindblad':'assets/drivers/arvid-lindblad.webp','Pierre Gasly':'assets/drivers/pierre-gasly.webp','Franco Colapinto':'assets/drivers/franco-colapinto.webp','Esteban Ocon':'assets/drivers/esteban-ocon.webp','Oliver Bearman':'assets/drivers/oliver-bearman.webp','Nico Hulkenberg':'assets/drivers/nico-hulkenberg.webp','Gabriel Bortoleto':'assets/drivers/gabriel-bortoleto.webp','Carlos Sainz':'assets/drivers/carlos-sainz.webp','Alexander Albon':'assets/drivers/alexander-albon.webp','Fernando Alonso':'assets/drivers/fernando-alonso.webp','Lance Stroll':'assets/drivers/lance-stroll.webp','Sergio Perez':'assets/drivers/sergio-perez.webp','Valtteri Bottas':'assets/drivers/valtteri-bottas.webp'};
const teamImages={'Mercedes':'assets/teams/mercedes.webp','Alpine':'assets/teams/alpine.png','Williams':'assets/teams/williams.png','McLaren':'assets/teams/mclaren.png','Cadillac':'assets/teams/cadillac.png','Ferrari':'assets/teams/ferrari.png','Red Bull Racing':'assets/teams/redbull.webp','Racing Bulls':'assets/teams/racingbulls.png','Haas F1 Team':'assets/teams/haas.png','Audi':'assets/teams/audi.webp','Aston Martin':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aston_Martin_Aramco_F1_Team_logo.svg/500px-Aston_Martin_Aramco_F1_Team_logo.svg.png'};
const FALLBACK='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/300px-F1.svg.png';
let use12=localStorage.getItem('f1_time_format')!=='24';
const countryTH={'Australia':'ออสเตรเลีย','China':'จีน','Japan':'ญี่ปุ่น','United States':'สหรัฐอเมริกา','Canada':'แคนาดา','Monaco':'โมนาโก','Spain':'สเปน','Austria':'ออสเตรีย','Great Britain':'สหราชอาณาจักร','Belgium':'เบลเยียม','Hungary':'ฮังการี','Netherlands':'เนเธอร์แลนด์','Italy':'อิตาลี','Azerbaijan':'อาเซอร์ไบจาน','Bahrain':'บาห์เรน','Singapore':'สิงคโปร์','Mexico':'เม็กซิโก','Brazil':'บราซิล','Qatar':'กาตาร์','Abu Dhabi':'อาบูดาบี'};
let displayRegion=localStorage.getItem('f1_region')||'th';
let language=localStorage.getItem('f1_language')||'th';
const regionZones={th:'Asia/Bangkok',jp:'Asia/Tokyo',gb:'Europe/London',us:'America/New_York',sg:'Asia/Singapore',au:'Australia/Sydney'};
const regionOffsets={th:7,jp:9,gb:0,us:-4,sg:8,au:10};
const regionNames={th:'ประเทศไทย',jp:'ญี่ปุ่น',gb:'สหราชอาณาจักร',us:'สหรัฐฯ ฝั่งตะวันออก',sg:'สิงคโปร์',au:'ออสเตรเลีย'};
const regionNamesEN={th:'Thailand',jp:'Japan',gb:'United Kingdom',us:'US Eastern',sg:'Singapore',au:'Australia'};
const countryEN={'Australia':'Australia','China':'China','Japan':'Japan','United States':'United States','Canada':'Canada','Monaco':'Monaco','Spain':'Spain','Austria':'Austria','Great Britain':'Great Britain','Belgium':'Belgium','Hungary':'Hungary','Netherlands':'Netherlands','Italy':'Italy','Azerbaijan':'Azerbaijan','Bahrain':'Bahrain','Singapore':'Singapore','Mexico':'Mexico','Brazil':'Brazil','Qatar':'Qatar','Abu Dhabi':'Abu Dhabi'};
const nationalityEN={'สหราชอาณาจักร':'United Kingdom','ออสเตรเลีย':'Australia','โมนาโก':'Monaco','อิตาลี':'Italy','เนเธอร์แลนด์':'Netherlands','ฝรั่งเศส':'France','นิวซีแลนด์':'New Zealand','อาร์เจนตินา':'Argentina','บราซิล':'Brazil','เยอรมนี':'Germany','สเปน':'Spain','ไทย':'Thailand','เม็กซิโก':'Mexico','ฟินแลนด์':'Finland','แคนาดา':'Canada'};
const enDriverCopy={
'Lando Norris':{bio:'Lando Norris rose through British junior racing before making his Formula 1 debut with McLaren in 2019. He took his first F1 win at the 2024 Miami Grand Prix and won his first Drivers’ Championship in 2025.',highlights:['2025 F1 World Champion','First F1 win at Miami 2024','McLaren driver since his F1 debut']},
'Oscar Piastri':{bio:'Oscar Piastri won the FIA Formula 3 title in 2020 and Formula 2 in 2021 before joining McLaren for his F1 debut in 2023. He quickly became one of the leading young drivers on the grid.',highlights:['2021 FIA Formula 2 Champion','First F1 win at Hungary 2024','McLaren teammate of Norris since 2023']},
'Charles Leclerc':{bio:'Charles Leclerc came through the Ferrari Driver Academy and made his F1 debut with Sauber in 2018 before joining Ferrari in 2019. He has established himself as one of Ferrari’s leading drivers.',highlights:['Joined Ferrari for the 2019 season','Multiple pole positions in modern F1','Key Monaco driver for Ferrari']},
'Lewis Hamilton':{bio:'Lewis Hamilton made his F1 debut with McLaren in 2007 and won his first world title in 2008. After a dominant Mercedes era, he moved to Ferrari for the 2025 season.',highlights:['Seven-time world champion','More than 100 F1 victories','Ferrari driver since 2025']},
'George Russell':{bio:'George Russell came through the Mercedes junior programme and debuted with Williams in 2019 before joining Mercedes in 2022. He is known for strong qualifying pace and racecraft.',highlights:['GP3 champion in 2017 and F2 champion in 2018','Joined Mercedes in 2022','First F1 win at São Paulo 2022']},
'Kimi Antonelli':{bio:'Kimi Antonelli is an Italian Mercedes junior who stepped into Formula 1 in 2025. He developed rapidly and became one of the standout young drivers of the 2026 season.',highlights:['Formula Regional Europe champion 2022','Formula 2 champion 2024','Won the 2026 Italian Grand Prix']},
'Max Verstappen':{bio:'Max Verstappen made his F1 debut with Toro Rosso in 2015 at just 17 before joining Red Bull Racing. He became a four-time world champion from 2021 to 2024 and is known for exceptional speed and race control.',highlights:['Four-time world champion (2021–2024)','First F1 win at Spanish GP 2016','Returned to number 3 after Norris won the 2025 title']},
'Isack Hadjar':{bio:'Isack Hadjar is a French Red Bull Junior who made his F1 debut with Racing Bulls in 2025 before moving up to Red Bull Racing for 2026 alongside Max Verstappen.',highlights:['Red Bull Junior Team member','F1 debut in 2025','Promoted to Red Bull Racing in 2026']},
'Liam Lawson':{bio:'Liam Lawson is a New Zealand driver from the Red Bull programme. After substitute F1 appearances, he became a full-time Racing Bulls driver and continues with the team in 2026.',highlights:['Red Bull Junior Team member','F1 debut in 2023','Racing Bulls driver in 2026']},
'Arvid Lindblad':{bio:'Arvid Lindblad is a rapid Red Bull Junior who progressed through karting and junior single-seaters. He stepped up to F1 with Racing Bulls in 2026 as a full-season rookie.',highlights:['Red Bull Junior Team graduate','2025 Formula 3 champion','Full-season F1 rookie in 2026']},
'Pierre Gasly':{bio:'Pierre Gasly won the GP2 title in 2016 and entered F1 with Toro Rosso in 2017. His memorable Monza victory in 2020 remains one of the modern era’s standout wins, and he is now a core Alpine driver.',highlights:['2016 GP2 champion','2020 Italian GP winner','Alpine driver since 2023']},
'Franco Colapinto':{bio:'Franco Colapinto is an Argentine driver who came through the Williams Academy. He made his F1 debut late in 2024 and joined Alpine in 2025 for the 2026 season.',highlights:['Argentine F1 driver','F1 debut in 2024','Competing for Alpine in 2026']},
'Gabriel Bortoleto':{bio:'Gabriel Bortoleto is a Brazilian prospect who won Formula 3 in 2023 and Formula 2 in 2024 before moving into F1. He became part of the Audi project for the 2026 season.',highlights:['2023 FIA Formula 3 champion','2024 FIA Formula 2 champion','Audi driver in 2026']},
'Nico Hulkenberg':{bio:'Nico Hulkenberg is an experienced German driver who debuted in F1 in 2010 and built a reputation for qualifying speed and endurance racing. He entered the Audi era in 2026.',highlights:['F1 debut in 2010','Pole position at Brazilian GP 2010','More than a decade of F1 experience']},
'Carlos Sainz':{bio:'Carlos Sainz is a Spanish driver who raced for Toro Rosso, Renault, McLaren and Ferrari before joining Williams in 2025. He is known for consistency, race reading and technical feedback.',highlights:['F1 debut in 2015','F1 winner at Silverstone 2022','Joined Williams in 2025']},
'Alexander Albon':{bio:'Alexander Albon is a Thai-British driver who debuted in F1 with Toro Rosso in 2019 and was promoted to Red Bull that same year. He returned with Williams in 2022 and became a key part of the team’s rebuild.',highlights:['F1 debut in 2019','Promoted to Red Bull Racing in 2019','Key Williams driver during the rebuild']},
'Sergio Perez':{bio:'Sergio Perez is an experienced Mexican driver known for tyre management and overtaking. After a long F1 career, he returned to the grid with Cadillac for the 2026 season.',highlights:['F1 debut in 2011','First F1 win at Sakhir 2020','Returned with Cadillac in 2026']},
'Valtteri Bottas':{bio:'Valtteri Bottas is a Finnish driver who achieved major success with Williams and Mercedes. He won multiple races and became a key part of Mercedes’ dominant era before joining Cadillac in 2026.',highlights:['F1 debut in 2013','10 F1 victories','World runner-up in 2019 and 2020']},
'Fernando Alonso':{bio:'Fernando Alonso is a two-time world champion from 2005 and 2006 and one of the most experienced drivers in F1 history. He continues to race for Aston Martin in 2026.',highlights:['Two-time world champion (2005, 2006)','Two-time Le Mans 24 Hours winner','One of the most experienced F1 drivers']},
'Lance Stroll':{bio:'Lance Stroll is a Canadian driver who debuted with Williams in 2017 and scored a podium in his rookie season. He has been a core Aston Martin driver since the team adopted its current identity.',highlights:['F1 debut in 2017','Podium at Azerbaijan GP 2017','Aston Martin driver since 2021']},
'Esteban Ocon':{bio:'Esteban Ocon is a French driver who came through the Mercedes junior programme and debuted in F1 in 2016. He won the 2021 Hungarian Grand Prix and joined Haas in 2025.',highlights:['F1 debut in 2016','2021 Hungarian GP winner','Joined Haas in 2025']},
'Oliver Bearman':{bio:'Oliver Bearman is a British Ferrari Driver Academy graduate who made an emergency F1 debut in 2024. He became a full-time Haas driver from 2025.',highlights:['Ferrari Driver Academy graduate','F1 debut with Ferrari in 2024','Full-time Haas driver since 2025']}
};
function tx(th,en){return language==='en'?en:th}
function countryName(c){return language==='en'?(countryEN[c]||c):(countryTH[c]||c)}
function regionName(k){return language==='en'?(regionNamesEN[k]||k):(regionNames[k]||k)}
function driverCopy(d){return language==='en'?(enDriverCopy[d.name]||{bio:d.bio,highlights:d.highlights}):d}

function fmtTime(t,offset){if(!t)return '—';const d=new Date(t+(offset||'+00:00'));const parts=new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{timeZone:regionZones[displayRegion]||'Asia/Bangkok',hour:'numeric',minute:'2-digit',hour12:use12}).formatToParts(d);const h=parts.find(x=>x.type==='hour')?.value||'00',m=parts.find(x=>x.type==='minute')?.value||'00',ap=parts.find(x=>x.type==='dayPeriod')?.value||'';return use12?`${h}:${m} ${ap}`:`${h.padStart(2,'0')}:${m}`}
function fmtDate(s){return new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{day:'numeric',month:'long',year:'numeric'}).format(new Date(s+'T12:00:00Z'))}
function eventMs(local,offset){return Date.parse(local.replace('T','T')+offset)}
function sessionList(r){const a=[];if(r.fp1)a.push({key:'fp1',label:'FP1',start:r.fp1,duration:60});if(r.fp2)a.push({key:'fp2',label:'FP2',start:r.fp2,duration:60});if(r.fp3)a.push({key:'fp3',label:'FP3',start:r.fp3,duration:60});if(r.sq)a.push({key:'sq',label:'SQ',start:r.sq,duration:45});if(r.sprint)a.push({key:'sprint',label:'SP',start:r.sprint,duration:60});if(r.qualifying)a.push({key:'qualifying',label:'Q',start:r.qualifying,duration:60});if(r.race)a.push({key:'race',label:'R',start:r.race,duration:150});return a}
function findLiveSession(now=Date.now()){for(const r of races){for(const s of sessionList(r)){const start=eventMs(s.start,r.offset),end=start+s.duration*60000;if(now>=start&&now<end)return {r,s,start,end}}}return null}
function nextSession(now=Date.now()){let best=null;for(const r of races)for(const s of sessionList(r)){const start=eventMs(s.start,r.offset);if(start>now&&(!best||start<best.start))best={r,s,start}}return best}
function countdownText(diff){if(diff<=0)return '00:00:00';if(diff>86400000){const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000);return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m`}if(diff>3600000){const h=Math.floor(diff/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);return `${h}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`}const m=Math.floor(diff/60000),s=Math.floor(diff%60000/1000);return `${m}m ${String(s).padStart(2,'0')}s`}
function renderTeams(){const grid=document.getElementById('teamGrid');if(!grid)return;grid.innerHTML=teams.map((t,ti)=>`<article class="team-card" style="--team:${t.color}"><div class="team-top"><div><div class="team-name">${t.name}</div><div class="team-sub">${t.tag} • 2026</div></div><img class="team-logo" src="${teamImages[t.name]||FALLBACK}" alt="${t.name} logo"></div><div class="team-buttons">${t.drivers.map((d,di)=>`<button class="driver-button" data-ti="${ti}" data-di="${di}"><img src="${driverImages[d.name]||FALLBACK}" alt="${d.name}"><span class="driver-info"><small>#${d.number}</small><b>${d.name}</b></span></button>`).join('')}<button class="team-button" data-team="${ti}">${language==='en'?'TEAM PROFILE →':'ดูข้อมูลทีม →'}</button></div></article>`).join('');document.querySelectorAll('.driver-button').forEach(b=>b.onclick=()=>openDriver(+b.dataset.ti,+b.dataset.di));document.querySelectorAll('.team-button').forEach(b=>b.onclick=()=>openTeam(+b.dataset.team))}
function setHero(color,name,meta,kicker){document.getElementById('profile').style.setProperty('--accent',color);document.getElementById('profileKicker').textContent=kicker;document.getElementById('profileName').textContent=name;document.getElementById('profileMeta').textContent=meta;document.getElementById('profileNumber').textContent='';document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function openDriver(ti,di){const t=teams[ti],d=t.drivers[di],copy=driverCopy(d);setHero(t.color,d.name,language==='en'?(nationalityEN[d.nationality]||d.nationality):d.nationality,language==='en'?'DRIVER PROFILE':'ประวัตินักแข่ง');document.getElementById('driverTab').style.display='inline-flex';document.getElementById('teamTab').style.display='inline-flex';document.getElementById('driverTab').classList.add('active');document.getElementById('teamTab').classList.remove('active');document.getElementById('profilePhoto').src=driverImages[d.name]||FALLBACK;document.getElementById('profileNumber').textContent='#'+d.number;document.getElementById('profileContent').innerHTML=`<section><h3>${language==='en'?'OVERVIEW':'ภาพรวม'}</h3><p>${copy.bio}</p></section><div class="profile-facts"><div class="fact"><small>${language==='en'?'NATIONALITY':'สัญชาติ'}</small><b>${language==='en'?(nationalityEN[d.nationality]||d.nationality):d.nationality}</b></div><div class="fact"><small>${language==='en'?'BIRTH':'วันเกิด'}</small><b>${d.dob}</b></div><div class="fact"><small>F1 DEBUT</small><b>${d.debut}</b></div><div class="fact"><small>${language==='en'?'WORLD TITLES':'แชมป์โลก'}</small><b>${d.titles}</b></div></div><section><h3>${language==='en'?'CAREER HIGHLIGHTS':'ผลงานเด่น'}</h3><ul class="highlights">${copy.highlights.map(x=>`<li class="highlight">${x}</li>`).join('')}</ul></section><section><h3>${language==='en'?'TEAM':'ทีม'}</h3><p>${t.name} • ${t.tag}</p></section>`}
function openTeam(ti){const t=teams[ti];setHero(t.color,t.name,'2026 CONSTRUCTOR',language==='en'?'TEAM PROFILE':'ข้อมูลทีม');document.getElementById('driverTab').style.display='none';document.getElementById('teamTab').style.display='none';document.getElementById('profilePhoto').src=teamImages[t.name]||FALLBACK;document.getElementById('profileContent').innerHTML=`<section class="team-profile"><div class="team-banner"><img src="${teamImages[t.name]||FALLBACK}" alt="${t.name} logo"><div><h3>${t.name}</h3><p>2026 CONSTRUCTOR • ${t.tag}</p></div></div><div class="team-drivers">${t.drivers.map(d=>`<div class="mini-driver"><img src="${driverImages[d.name]||FALLBACK}" alt="${d.name}"><div><b>${d.name}</b><span>#${d.number}</span></div></div>`).join('')}</div><div class="team-stats"><div class="team-stat"><small>${language==='en'?'TEAM CODE':'รหัสทีม'}</small><b>${t.tag}</b></div><div class="team-stat"><small>2026 GRID</small><b>${language==='en'?'ACTIVE':'ลงแข่ง'}</b></div><div class="team-stat"><small>${language==='en'?'DRIVERS':'นักขับ'}</small><b>2</b></div></div></section>`}
document.getElementById('driverTab').onclick=()=>{const name=document.getElementById('profileName').textContent;for(let ti=0;ti<teams.length;ti++)for(let di=0;di<teams[ti].drivers.length;di++)if(teams[ti].drivers[di].name===name)return openDriver(ti,di)};document.getElementById('teamTab').onclick=()=>{const name=document.getElementById('profileName').textContent;const ti=teams.findIndex(t=>t.name===name);if(ti>=0)openTeam(ti)};document.querySelectorAll('[data-close]').forEach(x=>x.onclick=closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow=''}
function renderSchedule(){const sg=document.getElementById('scheduleGrid');if(!sg)return;sg.innerHTML=races.map(r=>`<article class="race-card" data-round="${r.round}"><img class="circuit-img" src="${circuitImages[r.venue]}" alt="${r.venue} circuit"><div class="race-body"><div class="round">${language==='en'?'ROUND':'รอบ'} ${String(r.round).padStart(2,'0')}${r.type?`<span class="sprint"> ${r.type}</span>`:''}</div><div class="race-name">${countryName(r.country)} • ${r.venue}</div><div class="race-date">${fmtDate(r.date)}</div><div class="sessions"><div class="session"><span>FP1</span><b>${fmtTime(r.fp1,r.offset)}</b></div>${r.fp2?`<div class="session"><span>FP2</span><b>${fmtTime(r.fp2,r.offset)}</b></div>`:''}${r.fp3?`<div class="session"><span>FP3</span><b>${fmtTime(r.fp3,r.offset)}</b></div>`:''}${r.sq?`<div class="session sprint"><span>SQ</span><b>${fmtTime(r.sq,r.offset)}</b></div>`:''}${r.sprint?`<div class="session sprint"><span>SP</span><b>${fmtTime(r.sprint,r.offset)}</b></div>`:''}<div class="session"><span>Q</span><b>${fmtTime(r.qualifying,r.offset)}</b></div><div class="session"><span>R</span><b>${fmtTime(r.race,r.offset)}</b></div></div><div class="status" data-status></div></div></article>`).join('');updateCountdown()}
function updateCountdown(){const now=Date.now(),live=findLiveSession(now),next=nextSession(now);document.querySelectorAll('.race-card').forEach(c=>{c.classList.remove('live');c.querySelector('[data-status]').innerHTML=''});if(live){const card=document.querySelector(`.race-card[data-round="${live.r.round}"]`);if(card){card.classList.add('live');card.querySelector('[data-status]').innerHTML=`<span class="live-badge">● LIVE — ${live.s.label}</span>`}document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">🔴 F1 LIVE NOW</div><h3>${countryName(live.r.country)} • ${live.r.venue}</h3><div>${live.s.label} • ${language==='en'?'Live / Racing':'ถ่ายทอดสด/กำลังแข่งขัน'}</div></div><div class="countdown live-count">LIVE</div></div>`;return}if(!next){document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">${language==='en'?'SEASON COMPLETE':'จบฤดูกาล'}</div><h3>2026 F1 SEASON</h3></div></div>`;return}const diff=next.start-now;const card=document.querySelector(`.race-card[data-round="${next.r.round}"]`);if(card)card.querySelector('[data-status]').innerHTML=diff<3600000?'<span class="live-badge soon">● LIVE SOON</span>':'';document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">${language==='en'?'NEXT SESSION':'เซสชันถัดไป'}</div><h3>${countryName(next.r.country)} • ${next.r.venue}</h3><div>${next.s.label} • ${fmtDate(next.s.start.slice(0,10))} • ${fmtTime(next.s.start,next.r.offset)}</div></div><div class="countdown">${countdownText(diff)}</div></div>`}
renderTeams();renderSchedule();document.querySelector('.hero')?.classList.add('home-mode');setInterval(updateCountdown,1000);

/* ===== V9: PAGE NAVIGATION + SETTINGS ===== */
const pageIds=['home','drivers','calendar','games','settings'];
function showPage(name){if(!pageIds.includes(name))name='home';const pages=[...document.querySelectorAll('.page')];pages.forEach(p=>p.classList.remove('page-enter'));pages.forEach(p=>p.classList.toggle('active',p.id==='page-'+name));document.querySelector('.hero')?.classList.toggle('home-mode',name==='home');requestAnimationFrame(()=>document.getElementById('page-'+name)?.classList.add('page-enter'));document.querySelectorAll('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===name));if(name==='drivers')renderTeams();if(name==='calendar')renderSchedule();if(name==='games')renderLeaderboard();closeMenu();window.scrollTo({top:0,behavior:'smooth'});document.title=language==='en'?`THE PADDOCK • ${name==='home'?'F1 2026':name.toUpperCase()}`:`THE PADDOCK • ${name==='home'?'F1 2026':name}`;}
function closeMenu(){document.getElementById('menuPanel')?.classList.remove('open');document.getElementById('menuBackdrop')?.classList.remove('open')}
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.getElementById('menuBtn')?.addEventListener('click',()=>{document.getElementById('menuPanel')?.classList.add('open');document.getElementById('menuBackdrop')?.classList.add('open')});
document.getElementById('menuClose')?.addEventListener('click',closeMenu);document.getElementById('menuBackdrop')?.addEventListener('click',closeMenu);
const uiText={th:{homeEyebrow:'FORMULA 1 / 2026 WORLD CHAMPIONSHIP',homeDescription:'รวมข้อมูลนักแข่ง ทีม ปฏิทินสนาม และเกม F1 ในเว็บเดียว พร้อมเวลาแข่งที่แปลงเป็นเวลาประเทศไทย',homeCta:'ดูนักแข่ง',pageDriversTitle:'นักแข่ง',pageCalendarTitle:'ปฏิทินสนามแข่ง',pageGamesTitle:'F1 PLAY ZONE',pageSettingsTitle:'ตั้งค่า',menuHome:'หน้าหลัก',menuHomeSub:'HOME',menuDrivers:'นักแข่ง',menuDriversSub:'DRIVERS & TEAMS',menuCalendar:'ปฏิทินสนามแข่ง',menuCalendarSub:'2026 RACE CALENDAR',menuGames:'เกม',menuGamesSub:'F1 PLAY ZONE',menuSettings:'ตั้งค่า',menuSettingsSub:'TIME & REGION',driversDesc:'เลือก DRIVER เพื่อดูประวัติ หรือ TEAM เพื่อดูข้อมูลทีม',calendarDesc:'เวลาแสดงตามประเทศที่เลือกในตั้งค่า • ค่าเริ่มต้นเป็นประเทศไทย',raceTimeLabel:'เวลาแข่งของไทย',gamesDesc:'เล่นสั้น ๆ เก็บคะแนน และทายฤดูกาล 2026',gameDriverTitle:'ทายนักแข่ง',gameDriverDesc:'อ่านคำใบ้แล้วเลือกนักแข่งให้ถูก รับคะแนนจากคำตอบ',gameDriverBtn:'เล่นเกม',gameChampionTitle:'ปีนี้แชมป์อะไร?',gameChampionDesc:'ทายแชมป์โลกนักขับและแชมป์ผู้สร้าง 2026',gameChampionBtn:'เล่นเกม',gameRaceTitle:'F1 RACE',gameRaceDesc:'เลือก Mobile หรือ Computer แล้วหลบสิ่งกีดขวาง',gameRaceBtn:'เล่นเกม',gameStat1:'MINI GAMES',gameStat2:'FUN LAPS',gameStat3:'SEASON',policyTitle:'THE PADDOCK IS IN BETA',policyP1:'เว็บไซต์นี้ยังอยู่ในช่วง Beta ฟีเจอร์และข้อมูลบางส่วนอาจมีข้อผิดพลาดหรือเปลี่ยนแปลงได้',policyP2:'บัญชีในโหมดเดโมใช้ localStorage บนเครื่องนี้เท่านั้น ไม่ควรใช้รหัสผ่านจริง และไม่ควรใส่ข้อมูลลับ',policyP3:'หากพบปัญหา โปรดเข้าใจว่านี่คือเวอร์ชันทดสอบ เราจะค่อย ๆ ปรับปรุงระบบก่อนเข้าสู่ Stable',policyReadBtn:'รับทราบและปิด',authSubmitBtn:'ดำเนินการต่อ',policyCheckText:'ฉันอ่านนโยบายแล้วและยอมรับ',botCheckText:'ฉันไม่ใช่บอท',usernameFieldLabel:'Username',emailLabel:'Email',passwordFieldLabel:'Password',settingsDesc:'ปรับรูปแบบเวลาและภูมิภาคสำหรับตารางแข่ง',timeLabel:'เวลา',timeFormatTitle:'รูปแบบเวลา',timeFormatDesc:'เลือก 12 ชั่วโมงหรือ 24 ชั่วโมง',regionLabel:'ภูมิภาค',regionTitle:'ประเทศ / เวลาแข่ง',regionDesc:'ระบบจะแปลชื่อประเทศเป็นภาษาไทย และแปลงเวลาสนามเป็นเวลาของประเทศที่เลือก',languageLabel:'LANGUAGE',languageTitle:'ภาษา',languageDesc:'เลือกภาษาของเมนูและส่วนติดต่อเว็บไซต์',exampleLabel:'ตัวอย่าง',time12:'12 ชั่วโมง',time24:'24 ชั่วโมง',footerText:'Fan-made interface • ข้อมูลตารางตามปฏิทิน F1 2026',login:'ล็อกอิน',signup:'สมัคร',logout:'ออกจากระบบ',policy:'นโยบาย'},en:{homeEyebrow:'FORMULA 1 / 2026 WORLD CHAMPIONSHIP',homeDescription:'Drivers, teams, race calendar and F1 games in one place, with race times converted to your selected region.',homeCta:'VIEW DRIVERS',pageDriversTitle:'Drivers',pageCalendarTitle:'Race Calendar',pageGamesTitle:'F1 PLAY ZONE',pageSettingsTitle:'Settings',menuHome:'Home',menuHomeSub:'HOME',menuDrivers:'Drivers',menuDriversSub:'DRIVERS & TEAMS',menuCalendar:'Race Calendar',menuCalendarSub:'2026 RACE CALENDAR',menuGames:'Games',menuGamesSub:'F1 PLAY ZONE',menuSettings:'Settings',menuSettingsSub:'TIME & REGION',driversDesc:'Choose a driver for their profile or a team for team information.',calendarDesc:'Times follow the region selected in Settings.',raceTimeLabel:'Race time for your region',gamesDesc:'Play quick games, earn points and make your 2026 predictions.',gameDriverTitle:'Driver Quiz',gameDriverDesc:'Read the clue and pick the correct driver to earn points.',gameDriverBtn:'PLAY',gameChampionTitle:'Who will be champion?',gameChampionDesc:'Predict the 2026 Drivers’ and Constructors’ Champions.',gameChampionBtn:'PLAY',gameRaceTitle:'F1 RACE',gameRaceDesc:'Choose Mobile or Computer and avoid obstacles.',gameRaceBtn:'PLAY',gameStat1:'MINI GAMES',gameStat2:'FUN LAPS',gameStat3:'SEASON',policyTitle:'THE PADDOCK IS IN BETA',policyP1:'เว็บไซต์นี้ยังอยู่ในช่วง Beta ฟีเจอร์และข้อมูลบางส่วนอาจมีข้อผิดพลาดหรือเปลี่ยนแปลงได้',policyP2:'บัญชีในโหมดเดโมใช้ localStorage บนเครื่องนี้เท่านั้น ไม่ควรใช้รหัสผ่านจริง และไม่ควรใส่ข้อมูลลับ',policyP3:'หากพบปัญหา โปรดเข้าใจว่านี่คือเวอร์ชันทดสอบ เราจะค่อย ๆ ปรับปรุงระบบก่อนเข้าสู่ Stable',policyReadBtn:'รับทราบและปิด',authSubmitBtn:'ดำเนินการต่อ',policyCheckText:'ฉันอ่านนโยบายแล้วและยอมรับ',botCheckText:'ฉันไม่ใช่บอท',usernameFieldLabel:'Username',emailLabel:'Email',passwordFieldLabel:'Password',settingsDesc:'Adjust time format and race-region preferences.',timeLabel:'TIME',timeFormatTitle:'Time format',timeFormatDesc:'Choose 12-hour or 24-hour time.',regionLabel:'REGION',regionTitle:'Country / race time',regionDesc:'Convert race sessions to the selected region and localize country names.',languageLabel:'LANGUAGE',languageTitle:'Language',languageDesc:'Choose the language for the website interface.',exampleLabel:'EXAMPLE',time12:'12-hour',time24:'24-hour',footerText:'Fan-made interface • F1 2026 calendar data',login:'LOGIN',signup:'SIGN UP',logout:'LOG OUT',policy:'POLICY'}};
function setLabelTextPreserveControl(id,value){const el=document.getElementById(id);if(!el)return;const first=el.firstChild;if(first&&first.nodeType===Node.TEXT_NODE){first.nodeValue=value}else{el.insertBefore(document.createTextNode(value),el.firstChild)}}
function applyLanguage(){const d=uiText[language];document.documentElement.lang=language;Object.entries(d).forEach(([id,val])=>{if(id==='usernameFieldLabel'||id==='emailLabel'||id==='passwordFieldLabel')return;const el=document.getElementById(id);if(el)el.textContent=val});setLabelTextPreserveControl('usernameFieldLabel',d.usernameFieldLabel);setLabelTextPreserveControl('emailLabel',d.emailLabel);setLabelTextPreserveControl('passwordFieldLabel',d.passwordFieldLabel);const rs=document.getElementById('regionSelect');if(rs){const flags={th:'🇹🇭',jp:'🇯🇵',gb:'🇬🇧',us:'🇺🇸',sg:'🇸🇬',au:'🇦🇺'};rs.options[0].text=`${flags.th} ${regionName('th')} • GMT+7`;rs.options[1].text=`${flags.jp} ${regionName('jp')} • GMT+9`;rs.options[2].text=`${flags.gb} ${regionName('gb')} • GMT+0`;rs.options[3].text=`${flags.us} ${regionName('us')} • GMT-4/-5`;rs.options[4].text=`${flags.sg} ${regionName('sg')} • GMT+8`;rs.options[5].text=`${flags.au} ${regionName('au')} • GMT+10/+11`;}const ids=['loginTop','signupTop','loginBtn','logoutBtn','policyBtn'];const vals={loginTop:d.login,signupTop:d.signup,loginBtn:d.login,logoutBtn:d.logout,policyBtn:d.policy};ids.forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=vals[id]});const authSubmit=document.getElementById('authSubmitBtn');if(authSubmit)authSubmit.textContent=d.authSubmitBtn;const pRead=document.getElementById('policyReadBtn');if(pRead)pRead.textContent=d.policyReadBtn;const pTitle=document.getElementById('policyTitle');if(pTitle)pTitle.textContent=d.policyTitle;['policyP1','policyP2','policyP3','policyCheckText','botCheckText'].forEach(id=>{const el=document.getElementById(id);if(el&&d[id])el.textContent=d[id]});updateSettingsUI();renderTeams();renderSchedule();renderLeaderboard();updateMemberUI();}
function updateSettingsUI(){document.getElementById('time12')?.classList.toggle('active',use12);document.getElementById('time24')?.classList.toggle('active',!use12);document.getElementById('langTH')?.classList.toggle('active',language==='th');document.getElementById('langEN')?.classList.toggle('active',language==='en');const rs=document.getElementById('regionSelect');if(rs)rs.value=displayRegion;const summary=document.getElementById('regionSummary');if(summary)summary.textContent=regionName(displayRegion)+' • GMT'+(regionOffsets[displayRegion]>=0?'+':'')+regionOffsets[displayRegion];updateExample();}
function updateExample(){const title=document.getElementById('exampleTitle'),text=document.getElementById('exampleText');if(!title||!text)return;const sample=races.find(r=>r.race);const local=sample.race;const d=new Date(local+sample.offset);const time=new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{timeZone:regionZones[displayRegion],hour:'numeric',minute:'2-digit',hour12:use12}).format(d);title.textContent=language==='en'?'Example: Race time in your region':'ตัวอย่าง: เวลาแข่งตามประเทศที่เลือก';text.textContent=language==='en'?`${countryName(sample.country)} Race • ${time}`:`${countryName(sample.country)} Race • เวลา ${time}`;}
document.querySelectorAll('[data-time]').forEach(b=>b.addEventListener('click',()=>{use12=b.dataset.time==='12';localStorage.setItem('f1_time_format',use12?'12':'24');updateSettingsUI();renderSchedule()}));
document.getElementById('regionSelect')?.addEventListener('change',e=>{displayRegion=e.target.value;localStorage.setItem('f1_region',displayRegion);updateSettingsUI();renderSchedule();});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.lang;localStorage.setItem('f1_language',language);applyLanguage();}));
updateSettingsUI();

/* ===== V8: ROBUST MINI GAMES + MEMBER DEMO ===== */
const $ = (id) => document.getElementById(id);

/* ===== V14 ACCOUNT CORE =====
   Register creates an account.
   Login creates a session.
   Logout only removes the session.
   Account records are never replaced by login/logout.
*/
const accountStoreKey = 'f1_paddock_accounts_v14';
const sessionStoreKey = 'f1_paddock_session_v14';
const gameScoreKey = 'f1_paddock_scores_v14';
const predKey = 'f1_paddock_predictions_v14';
const legacyMemberKey = 'f1_archive_demo_user_v8';
const gameView = $('gameView');
const loginBtn = $('loginBtn'), signupBtn = $('signupBtn'), logoutBtn = $('logoutBtn'), policyBtn = $('policyBtn');
const authModal = $('authModal'), policyModal = $('policyModal'), authForm = $('authForm');
const authTitle = $('authTitle'), authKicker = $('authKicker'), authUsername = $('authUsername'), authEmail = $('authEmail'), authPassword = $('authPassword');
const signupChecks = $('signupChecks'), policyCheck = $('policyCheck'), botCheck = $('botCheck'), policyReadBtn = $('policyReadBtn');
const memberStatus = $('memberStatus');

document.getElementById('signupTop')?.addEventListener('click',()=>openAuth('signup'));
document.getElementById('loginTop')?.addEventListener('click',()=>openAuth('login'));

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function readJSON(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v ?? fallback}catch{return fallback}}
function getAccounts(){const a=readJSON(accountStoreKey,[]);return Array.isArray(a)?a:[]}
function saveAccounts(accounts){localStorage.setItem(accountStoreKey,JSON.stringify(accounts))}
function getSessionUsername(){return localStorage.getItem(sessionStoreKey)||null}
function getCurrentUser(){const username=getSessionUsername();if(!username)return null;return getAccounts().find(u=>u.usernameKey===normalizeUsername(username))||null}
function normalizeUsername(s){return String(s||'').trim().toLowerCase()}
function setSession(username){localStorage.setItem(sessionStoreKey,username);updateMemberUI()}
function clearSession(){localStorage.removeItem(sessionStoreKey);updateMemberUI()}
function getScores(){const s=readJSON(gameScoreKey,{});return s&&typeof s==='object'&&!Array.isArray(s)?s:{} }
function addScore(game,points){const m=getCurrentUser();if(!m)return false;const s=getScores();s[m.username]=s[m.username]||{};s[m.username][game]=(s[m.username][game]||0)+points;localStorage.setItem(gameScoreKey,JSON.stringify(s));renderLeaderboard();updateMemberUI();return true}
async function hashPassword(value){
  if(window.crypto?.subtle){const data=new TextEncoder().encode(value),buf=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  let h=2166136261;for(let i=0;i<value.length;i++){h^=value.charCodeAt(i);h=Math.imul(h,16777619)}return String(h>>>0)
}
function accountScore(username){const s=getScores()[username]||{};return Object.values(s).reduce((a,b)=>a+(Number(b)||0),0)}
function updateMemberUI(){
  const m=getCurrentUser();
  const signupTop=$('signupTop'),loginTop=$('loginTop');
  if(!memberStatus)return;
  if(m){
    memberStatus.innerHTML=language==='en'?`Logged in: <b>${esc(m.username)}</b> • ${accountScore(m.username)} pts • Member since ${esc(m.createdAt||'today')}`:`เข้าสู่ระบบแล้ว: <b>${esc(m.username)}</b> • คะแนน ${accountScore(m.username)} • สมาชิกตั้งแต่ ${esc(m.createdAt||'วันนี้')}`;
    loginBtn?.classList.add('hidden');logoutBtn?.classList.remove('hidden');
    signupTop?.classList.add('hidden');
    if(loginTop){
      loginTop.textContent=esc(m.username);
      loginTop.classList.add('account-user');
      loginTop.disabled=true;
      loginTop.setAttribute('aria-label',`บัญชี ${m.username}`);
    }
  }else{
    memberStatus.textContent=language==='en'?'Not logged in • Sign up or log in to continue':'ยังไม่ได้เข้าสู่ระบบ • กรุณาสมัครบัญชีก่อนหรือเข้าสู่ระบบ';
    loginBtn?.classList.remove('hidden');logoutBtn?.classList.add('hidden');
    signupTop?.classList.remove('hidden');
    if(loginTop){
      loginTop.textContent=language==='en'?'LOGIN':'ล็อกอิน';
      loginTop.classList.remove('account-user');
      loginTop.disabled=false;
      loginTop.removeAttribute('aria-label');
    }
  }
}
function openAuth(mode){
  if(!authModal)return;
  authModal.classList.add('show');authModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  authTitle.textContent=mode==='signup'?'SIGN UP':'LOGIN';authKicker.textContent=mode==='signup'?'CREATE ACCOUNT':'ACCOUNT LOGIN';const emailLabel=document.getElementById('emailLabel');if(emailLabel)emailLabel.firstChild.textContent=language==='en'?'Email':'Email';authForm.querySelector('label:first-child')?.firstChild && (authForm.querySelector('label:first-child').firstChild.textContent=language==='en'?'Username':'Username');authForm.querySelector('label:nth-of-type(3)')?.firstChild && (authForm.querySelector('label:nth-of-type(3)').firstChild.textContent=language==='en'?'Password':'Password');
  authEmail.required=mode==='signup';signupChecks.classList.toggle('hidden',mode!=='signup');authPassword.autocomplete=mode==='signup'?'new-password':'current-password';
  authForm.dataset.mode=mode;authForm.reset();authForm.dataset.mode=mode;signupChecks.classList.toggle('hidden',mode!=='signup');
}
function closeAuth(){authModal?.classList.remove('show');authModal?.setAttribute('aria-hidden','true');document.body.style.overflow=''}
loginBtn?.addEventListener('click',()=>openAuth('login'));
logoutBtn?.addEventListener('click',()=>{clearSession();gameView.innerHTML='';alert(language==='en'?'Logged out.':'ออกจากระบบแล้ว')});
policyBtn?.addEventListener('click',()=>{policyModal?.classList.add('show');policyModal?.setAttribute('aria-hidden','false')});
policyReadBtn?.addEventListener('click',()=>{policyModal?.classList.remove('show');openAuth('signup');policyCheck.checked=true});
document.querySelectorAll('[data-auth-close]').forEach(x=>x.addEventListener('click',closeAuth));
document.querySelectorAll('[data-policy-close]').forEach(x=>x.addEventListener('click',()=>{policyModal?.classList.remove('show');policyModal?.setAttribute('aria-hidden','true');localStorage.setItem('f1_beta_notice_v1','1')}));

/* One-time cleanup: the old V8 demo key was also used as the active login.
   V14 deliberately does NOT import it as a logged-in session. */
localStorage.removeItem(legacyMemberKey);
setTimeout(()=>{if(!localStorage.getItem('f1_beta_notice_v1')){policyModal?.classList.add('show');policyModal?.setAttribute('aria-hidden','false')}},180);

async function registerAccount(username,email,password){
  const usernameKey=normalizeUsername(username);
  const accounts=getAccounts();
  if(accounts.some(u=>u.usernameKey===usernameKey))return {ok:false,msg:'ชื่อผู้ใช้นี้มีอยู่แล้ว'};
  const emailKey=email.trim().toLowerCase();
  if(accounts.some(u=>u.emailKey===emailKey))return {ok:false,msg:'อีเมลนี้มีบัญชีอยู่แล้ว'};
  const passwordHash=await hashPassword(password);
  const account={
    id:globalThis.crypto?.randomUUID?crypto.randomUUID():`acct_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    username:username.trim(),usernameKey,email:email.trim(),emailKey,passwordHash,
    score:0,createdAt:new Date().toLocaleDateString('th-TH'),policyAcceptedAt:new Date().toISOString(),botAttested:true
  };
  accounts.push(account);saveAccounts(accounts);
  return {ok:true,account};
}

async function loginAccount(username,password){
  const usernameKey=normalizeUsername(username);const account=getAccounts().find(u=>u.usernameKey===usernameKey);
  if(!account)return {ok:false,msg:'ไม่พบบัญชีนี้ กรุณาสมัครบัญชีก่อน'};
  const passwordHash=await hashPassword(password);
  if(account.passwordHash!==passwordHash)return {ok:false,msg:'รหัสผ่านไม่ถูกต้อง'};
  setSession(account.username);return {ok:true,account};
}

authForm?.addEventListener('submit',async e=>{
  e.preventDefault();
  const mode=authForm.dataset.mode,u=authUsername.value.trim(),email=authEmail.value.trim(),pw=authPassword.value;
  if(!u)return alert(language==='en'?'Please enter a username.':'กรุณาใส่ Username');
  if(mode==='signup'){
    if(!email)return alert(language==='en'?'Please enter an email.':'กรุณาใส่อีเมล');
    if(!policyCheck.checked||!botCheck.checked)return alert(language==='en'?'Please accept the policy and confirm you are not a bot.':'กรุณาอ่านนโยบายและยืนยันว่าไม่ใช่บอทก่อนสมัคร');
    if(pw.length<6)return alert(language==='en'?'Password must be at least 6 characters.':'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
    const result=await registerAccount(u,email,pw);if(!result.ok)return alert(result.msg);
    closeAuth();alert(language==='en'?'Account created. Please log in.':'สมัครสมาชิกสำเร็จ กรุณาล็อกอินเพื่อเข้าสู่ระบบ');openAuth('login');authUsername.value=u;authPassword.focus();
  }else{
    if(!pw)return alert(language==='en'?'Please enter your password.':'กรุณาใส่รหัสผ่าน');
    const result=await loginAccount(u,pw);if(!result.ok)return alert(result.msg);
    closeAuth();alert(language==='en'?'Login successful.':'เข้าสู่ระบบสำเร็จ');
  }
});

/* ===== V11: GAME MODAL + LEADERBOARD ===== */
function openGameWindow(){gameView?.classList.add('open');gameView?.setAttribute('aria-hidden','false');$('gameClose')?.classList.add('show');document.body.style.overflow='hidden'}
function closeGameWindow(){if(raceTimer){clearInterval(raceTimer);raceTimer=null}if(raceKeyHandler){document.removeEventListener('keydown',raceKeyHandler);raceKeyHandler=null}gameView?.classList.remove('open');gameView?.setAttribute('aria-hidden','true');$('gameClose')?.classList.remove('show');document.body.style.overflow='';}
$('gameClose')?.addEventListener('click',closeGameWindow);
gameView?.addEventListener('click',e=>{if(e.target===gameView)closeGameWindow()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&gameView?.classList.contains('open'))closeGameWindow()});
function renderLeaderboard(){const el=$('leaderboard');if(!el)return;const scores=getScores();const rows=Object.entries(scores).map(([user,g])=>({user,total:Object.values(g||{}).reduce((a,b)=>a+(Number(b)||0),0)})).sort((a,b)=>b.total-a.total).slice(0,10);el.innerHTML=`<div class="leaderboard-head"><div><p class="eyebrow">LEADERBOARD</p><h3>${language==='en'?'TOP F1 PLAYERS':'อันดับคะแนน F1'}</h3></div><span class="leaderboard-note">${language==='en'?'This device demo':'เดโมบนเครื่องนี้'}</span></div>${rows.length?rows.map((r,i)=>`<div class="leader-row"><span class="leader-rank">${String(i+1).padStart(2,'0')}</span><span class="leader-name">${esc(r.user)}</span><b class="leader-score">${r.total.toLocaleString()} PTS</b></div>`).join(''):`<div class="leader-empty">${language==='en'?'No scores yet. Play a game to enter the board.':'ยังไม่มีคะแนน เล่นเกมเพื่อขึ้นกระดาน'}</div>`}`}

updateMemberUI();

function showGameIntro(title,how,body=''){gameView.innerHTML=`<div class="game-panel"><p class="eyebrow">${language==='en'?'HOW TO PLAY':'วิธีเล่น'}</p><h2>${title}</h2><p class="game-help">${how}</p>${body}</div>`}
function requireMember(){if(!getCurrentUser()){alert(language==='en'?'Please sign up and log in before playing games and saving scores.':'กรุณาสมัครบัญชีและล็อกอินก่อนจึงสามารถเล่นเกมและบันทึกคะแนนได้');$('member')?.scrollIntoView({behavior:'smooth'});openAuth('signup');return false}return true}
let driverRound=0;
function startDriverGame(){if(!requireMember())return;driverRound=0;nextDriverQuestion()}
function nextDriverQuestion(){
  const pool=teams.flatMap(t=>t.drivers.map(d=>({...d,team:t.name}))),d=pool[Math.floor(Math.random()*pool.length)],choices=[d.name];
  while(choices.length<3){const x=pool[Math.floor(Math.random()*pool.length)].name;if(!choices.includes(x))choices.push(x)}choices.sort(()=>Math.random()-.5);
  gameView.innerHTML=`<div class="game-panel"><div class="score-line">${language==='en'?'QUESTION':'คำถาม'} ${driverRound+1}/5</div><div class="quiz-question">${language==='en'?'Which driver is with':'ใครคือนักแข่งที่อยู่กับ'} <b>${esc(d.team)}</b> ${language==='en'?'and uses number':'และใช้หมายเลข'} <b>#${d.number}</b>?</div><div class="quiz-options">${choices.map(x=>`<button class="game-choice" data-answer="${esc(x)}">${esc(x)}</button>`).join('')}</div><p class="game-help">${language==='en'?'Correct answer: +100 points':'ตอบให้ถูกเพื่อรับ 100 คะแนน'}</p></div>`;
  gameView.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const ok=b.dataset.answer===d.name;addScore('driver-quiz',ok?100:0);gameView.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);alert(ok?(language==='en'? 'Correct! +100 points':'ถูกต้อง +100 คะแนน'):(language==='en'?'Wrong 😅':'ผิด 😅'));driverRound++;if(driverRound<5)nextDriverQuestion();else{gameView.innerHTML=`<div class="game-panel"><h2>${language==='en'?'Game complete 🏁':'จบเกม 🏁'}</h2><p>${language==='en'?'Score saved to your Member Area.':'บันทึกคะแนนไว้ใน Member Area แล้ว'}</p></div>`;updateMemberUI()}}))
}
function startChampionGame(){
  if(!requireMember())return;const opts=teams.flatMap(t=>t.drivers.map(d=>d.name));
  gameView.innerHTML=`<div class="game-panel"><p class="eyebrow">2026 PREDICTION</p><h2>${language==='en'?'Who will be champion?':'ปีนี้แชมป์อะไร?'}</h2><p>${language==='en'?'Choose the Drivers’ Champion':'เลือกแชมป์โลกนักขับ'}</p><div class="quiz-options">${opts.map(x=>`<button class="game-choice" data-pred-driver="${esc(x)}">${esc(x)}</button>`).join('')}</div><p id="predMsg" class="game-help"></p><p>${language==='en'?'Choose the Constructors’ Champion':'เลือกแชมป์ผู้สร้าง'}</p><div class="quiz-options">${teams.map(t=>`<button class="game-choice" data-pred-team="${esc(t.name)}">${esc(t.name)}</button>`).join('')}</div><button id="savePred" class="primary-btn" disabled>${language==='en'?'LOCK PREDICTION':'ล็อกคำทาย'}</button></div>`;
  let pd='',pt='';const savePred=$('savePred');
  gameView.querySelectorAll('[data-pred-driver]').forEach(b=>b.addEventListener('click',()=>{pd=b.dataset.predDriver;gameView.querySelectorAll('[data-pred-driver]').forEach(x=>x.disabled=true);$('predMsg').textContent=(language==='en'?'Driver selected: ':'เลือกนักขับแล้ว: ')+pd;check()}));
  gameView.querySelectorAll('[data-pred-team]').forEach(b=>b.addEventListener('click',()=>{pt=b.dataset.predTeam;gameView.querySelectorAll('[data-pred-team]').forEach(x=>x.disabled=true);check()}));
  function check(){savePred.disabled=!(pd&&pt)}
  savePred.addEventListener('click',()=>{const m=getCurrentUser(),all=readJSON(predKey,{});all[m.username]={season:2026,driver:pd,team:pt,createdAt:new Date().toISOString()};localStorage.setItem(predKey,JSON.stringify(all));addScore('prediction',250);updateMemberUI();alert(language==='en'?'Prediction locked! +250 points':'ล็อกคำทายแล้ว +250 คะแนน')})
}
let raceTimer=null,raceKeyHandler=null;
function startRaceGame(){
  if(!requireMember())return;let mode='mobile';showGameIntro('F1 RACE',language==='en'?'1) Choose a device  2) Read the instructions  3) Press START  4) Avoid cars as long as possible':'1) เลือกอุปกรณ์  2) อ่านวิธีเล่น  3) กด START  4) หลบรถให้นานที่สุด',`<div class="game-actions"><button class="device-btn" data-device="mobile">📱 MOBILE</button><button class="device-btn" data-device="computer">💻 COMPUTER</button></div><div id="raceStart"><p class="game-help">${language==='en'?'Mobile: use ◀ ▶ • Computer: use A/D or ←/→':'Mobile ใช้ปุ่ม ◀ ▶ • Computer ใช้ A/D หรือ ←/→'}</p></div>`);
  gameView.querySelectorAll('[data-device]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.device;gameView.querySelectorAll('[data-device]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');$('raceStart').innerHTML=`<p class="game-help"><b>${mode==='mobile'?'MOBILE':'COMPUTER'}</b>: ${mode==='mobile'?(language==='en'?'Use ◀ ▶ to change lanes':'กดปุ่ม ◀ ▶ เพื่อเปลี่ยนเลน'):(language==='en'?'Use A/D or ←/→ to change lanes':'กด A/D หรือ ←/→ เพื่อเปลี่ยนเลน')}</p><button id="startRaceBtn" class="primary-btn">START RACE</button>`;$('startRaceBtn').addEventListener('click',()=>runRace(mode))}));
}
function runRace(mode){
  if(raceTimer)clearInterval(raceTimer);if(raceKeyHandler)document.removeEventListener('keydown',raceKeyHandler);
  gameView.innerHTML=`<div class="game-panel"><div class="score-line">TIME <span id="raceScore">0</span>s</div><div id="raceGame" class="race-game"><div class="race-lane"></div><div id="gameCar" class="game-car"></div></div><div class="game-actions"><button class="device-btn" id="leftBtn">◀</button><button class="device-btn" id="rightBtn">▶</button></div><p class="game-help">${mode==='mobile'?(language==='en'?'Use left/right buttons to change lanes':'กดปุ่มซ้าย/ขวาเพื่อเปลี่ยนเลน'):(language==='en'?'Use A/D or left/right arrows':'ใช้ A/D หรือปุ่มลูกศรซ้าย/ขวา')}</p></div>`;
  const car=$('gameCar'),box=$('raceGame'),scoreEl=$('raceScore');let lane=1,time=0,dead=false,obs=[];
  function move(dir){lane=Math.max(0,Math.min(2,lane+dir));car.style.left=(25+lane*25)+'%'}
  $('leftBtn').addEventListener('click',()=>move(-1));$('rightBtn').addEventListener('click',()=>move(1));
  raceKeyHandler=e=>{if(['ArrowLeft','a','A'].includes(e.key)){e.preventDefault();move(-1)}if(['ArrowRight','d','D'].includes(e.key)){e.preventDefault();move(1)}};document.addEventListener('keydown',raceKeyHandler);
  raceTimer=setInterval(()=>{
    if(dead)return;time+=0.1;scoreEl.textContent=time.toFixed(1);
    if(Math.random()<0.12){const o=document.createElement('div');o.className='obstacle';const ol=Math.floor(Math.random()*3);o.dataset.lane=ol;o.style.left=(25+ol*25)+'%';o.style.top='-60px';box.appendChild(o);obs.push(o)}
    obs.forEach((o,i)=>{const y=(parseFloat(o.style.top)||-60)+8;o.style.top=y+'px';const ol=Number(o.dataset.lane);if(y>235&&y<330&&ol===lane){dead=true;clearInterval(raceTimer);document.removeEventListener('keydown',raceKeyHandler);const pts=Math.floor(time*10);addScore('race',pts);updateMemberUI();alert(language==='en'?`Crash! Time ${time.toFixed(1)}s • Score +${pts}`:`ชน! เวลา ${time.toFixed(1)}s • คะแนน +${pts}`);return}if(y>380){o.remove();obs.splice(i,1)}})
  },100)
}

document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>{openGameWindow();const g=b.dataset.game;if(g==='driver')startDriverGame();else if(g==='champion')startChampionGame();else if(g==='race')startRaceGame();}));
applyLanguage();updateMemberUI();renderLeaderboard();
