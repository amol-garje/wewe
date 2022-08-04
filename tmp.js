let Meter=document.getElementById("M");
        let BB=document.getElementById("K");
        Meter.addEventListener('input',function (){
              let y=this.value;
              y=y/1000;
              BB.value=y;
        });

        BB.addEventListener('input',function (){
              let j=this.value;
              j=j*1000;
              Meter.value=j;
        })