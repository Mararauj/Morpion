export class Morpion {

    constructor() {
        document.querySelector('h1').textContent = "Morpion by Marco";
        this.jouer(1);

    }

    text_joueur(joueur){
        document.getElementById('currentPlayer').textContent="Joueur " + joueur;
    }
    
    jouer(joueur){
        document.getElementById('replay').style.visibility = 'hidden';
        document.getElementById('grid').style = 'cursor: pointer;';
        var g = false;
        this.text_joueur(joueur);
        var cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener("click", e => {
                if(cell.textContent == '' && this.nul() == false && g == false){
                    if(joueur === 1) {
                        cell.textContent="X";
                        if(this.gagnant()){
                            g = true;
                            alert("Le joueur 1 a gagné !");
                            document.getElementById('grid').style = 'pointer-events: none;';
                            this.reset(1);
                        }
                        else if(this.nul()){
                            alert("Match nul");
                            
                            document.getElementById('grid').style = 'pointer-events: none;';
                            this.reset(0);
                        }
                        else{
                            joueur = 2;
                            this.text_joueur(2);
                        }
                    }
                    else {
                        cell.textContent="O";
                        if(this.gagnant()){
                            g = true;
                            alert("Le joueur 2 a gagné !");
                            document.getElementById('grid').style = 'pointer-events: none;';
                            this.reset(2);
                        }
                        else if(this.nul()){
                            alert("Match nul");
                            document.getElementById('grid').style = 'pointer-events: none;';
                            this.reset(0);
                        }
                        else{
                            joueur = 1;
                            this.text_joueur(1);
                        }
                    }
                }
            });
        });
    }

    nul(){
        var n = true;
        for(let i = 0; i < document.querySelectorAll('.cell').length; i++){
            if(document.querySelectorAll('.cell')[i].textContent == ''){
                n = false;
            }
        }
        return n;
    }

    gagnant(){
        var gg = false;
        var cell = document.querySelectorAll('.cell');

        for(let i = 0; i < 3; i++){
            if(cell[i].textContent != '' && cell[i].textContent === cell[3 + i].textContent && cell[i].textContent === cell[6 + i].textContent){
                gg = true;
            }
        }

        for(let i = 0; i < 3; i++){
            if(cell[i * 3].textContent != '' && cell[i * 3].textContent === cell[i * 3 + 1].textContent && cell[i * 3].textContent === cell[i * 3 + 2].textContent){
                gg = true;
            }
        }

        if(cell[0].textContent != '' && cell[0].textContent === cell[4].textContent && cell[0].textContent === cell[8].textContent){
            gg = true;
        }

        if(cell[2].textContent != '' && cell[2].textContent === cell[4].textContent && cell[2].textContent === cell[6].textContent){
            gg = true;
        }

        return gg;

    }

    reset(nb){
        var cells = document.querySelectorAll('.cell');
        document.getElementById('replay').style.visibility = 'visible';
        if(nb == 1){
            document.getElementById("playerOne").textContent = parseInt(document.getElementById("playerOne").textContent) + 1;
        }
        else if (nb == 2){
            document.getElementById("playerTwo").textContent = parseInt(document.getElementById("playerTwo").textContent) + 1;
        }
        document.getElementById('replay').addEventListener("click", () => {
            cells.forEach(cell => {
                cell.textContent = '';
            });
            this.jouer(1);
        })
    }
}