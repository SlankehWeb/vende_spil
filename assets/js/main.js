availableImages=['/assets/img/Betta.webp','/assets/img/Celestial-Pearl-Danio.webp','/assets/img/Discus.webp','/assets/img/Dwarf-Gourami.webp','/assets/img/Electric-Blue-Hap.webp','/assets/img/Electric-Yellow-Lab.webp',
'/assets/img/Florida-Flag-Fish.webp','/assets/img/German-blue-ram.webp','/assets/img/Betta.webp','/assets/img/Celestial-Pearl-Danio.webp','/assets/img/Discus.webp','/assets/img/Dwarf-Gourami.webp','/assets/img/Electric-Blue-Hap.webp','/assets/img/Electric-Yellow-Lab.webp',
'/assets/img/Florida-Flag-Fish.webp','/assets/img/German-blue-ram.webp']

function start(){
    let moves =0;
    const maindiv = document.getElementById("boardgame");
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.lastChild);
    }
    const scorediv = document.getElementById("score");
    while (scorediv.firstChild) {
       scorediv.removeChild(scorediv.lastChild);
    }

    var row = document.createElement('div')
    ImagesCopy= JSON.parse(JSON.stringify( availableImages))
    for(let j=1;j<=16;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv')
        var image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide')
        div.appendChild(image)
        row.appendChild(div);
        
        if(j%4==0){
            document.getElementById('boardgame').append(row)
            row = document.createElement('div')
        }

        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
           var currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag=0;
            if(currentlyshowing.length >= 1){
                for(let i=0;i<currentlyshowing.length;i++)
                {
                    if(currentlyshowing[i].src != currImg.src)
                    currentlyshowing[i].classList.remove('showimg');
                    else{
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag=1;
                    }
                }
            }

            if(document.getElementsByClassName('match').length==16){
                alert("you win")
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node= document.createTextNode("You win Moves "+moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }

            if(flag==0)
            currImg.classList.add('showimg');
        })
    }
}
