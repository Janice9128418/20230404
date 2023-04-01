let points = [[7,-4],[-1,5],[7,-4],[12,-12],[12,-17],[11,-20],[8,-23],[5,-24],[2,-24],[-1,-22],[-7,-24],[-10,-23],[-13,-20],[-14,-15],[-12,-11],[-9,-7],[-5,-3],[-12,-8],[-21,-11],[-25,-10],[-28,-7],[-28,-2],[-26,2],[-27,4],[-28,8],[-27,11],[-25,13],[-20,15],[-16,15],[-11,13],[-8,11],[-1,5],[-10,14],[-12,17],[-13,21],[-12,25],[-10,28],[-6,30],[-3,30],[1,28],[6,30],[10,30],[13,28],[14,23],[10,14],[6,10],[2,4],[-5,-3],[2,4],[7,10],[12,13],[16,14],[20,14],[25,12],[28,8],[28,5],[26,1],[28,-5],[27,-8],[25,-10],[20,-11],[16,-10]]; 

function setup() {   
  createCanvas(windowWidth, windowHeight); 
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 10;
    }
  }
}

//---------線條採用漸層呈現，產生由小到大至少五層的圖------------
function draw() {
  background(255);
  translate(width/2, height/2);//原點放置於視窗中央
  let zoom = map(mouseX, 0, width , 0.5, 2)//滑鼠橫軸控制縮放，設定縮放比例
  scale(zoom);
  textSize(50)  //文字大小
  fill("#fb6f92");  //設定顏色
  text("LUCKY",20,45)  //顯示文字
  for(let k = 1 ; k<6 ; k++){//由小到大至少五層的圖
    push();
    scale(k/5.0,+5/5.0) //按迴圈次數放大畫布比例
    strokeWeight(k/2.0) //按迴圈次數調整框線粗細

  for (let i = 0; i < points.length-1; i++) {
    let from = color("#52796f"); //漸層的起始顏色
    let to = color("#bbd0ff"); //漸層的結束顏色
    stroke(gradient(from, to, i/(points.length-2))); //漸層線條顏色
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  
  let from = color("#52796f");
  let to = color("#bbd0ff");
  stroke(gradient(from, to, 1)); //漸層線條顏色
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);//連接最後與第一個點
  pop();
  }
}

// 定義gradient函數
function gradient(from, to, percent) {
  let r = red(from) + percent * (red(to) - red(from)); //根據percent值計算紅色通道的值
  let g = green(from) + percent * (green(to) - green(from)); //根據percent值計算綠色通道的值
  let b = blue(from) + percent * (blue(to) - blue(from)); //根據percent值計算藍色通道的值
  return color(r, g, b); //返回最終的漸層顏色
}