Nagaty
#0323

Nagaty — 18/10/2021
https://thibaultdailliez.github.io/cv/
    Matthieu — 22/10/2021
1 thibault
2 thibault
https://eyerward.github.io/cv/
    Matthieu — 22/10/2021
Mec on s'est viandé !!
Tu dois basculer le site de Nathan et moi le tien, c'est le bordel cet orga
Matthieu — 26/10/2021
Askip t'as des messages de Gabriel sur discord
Nagaty — 26/10/2021
oui mais je lui ai rep deja
Matthieu — 28/10/2021
Nagaty — 02/11/2021
Prout
Matthieu — 02/11/2021
Caca merde
Nagaty — 02/11/2021
Ahaha
Matthieu — 02/11/2021
Image
Nagaty — 02/11/2021
Matthieu — 02/11/2021
Image
Matthieu — 08/11/2021
https://github.com/davidmars/halloween/blob/master/exercice-2021-11-07.md
    GitHub
halloween/exercice-2021-11-07.md at master · davidmars/halloween
un petit exercice sur les décors. Contribute to davidmars/halloween development by creating an account on GitHub.

    Nagaty — 08/11/2021
Type de fichier joint : archive
zombies.7z
51.69 KB
Matthieu — 10/11/2021
tab = [[0 for x in range(7)]for y in range(6)]



def ShowTab():
for i in range(len(tab[0])):
print("|",i+1,"|",sep='',end='')
print('')

for i in range (len(tab)):
for j in range (len(tab[i])):
if tab[i][j]==0:
print("| |",end='')
elif tab[i][j]==1:
print("|X|",end='')
elif tab[i][j]==2:
print("|O|",end='')
print("")


while True:
while True:
ShowTab()
colonne = int(input("Entrez le numéro de la colonne J1: "))
for i in reversed(range(len(tab))):
if tab[i][colonne-1]==0:
tab[i][colonne-1]=1
break
Nagaty — 24/11/2021
n = int(input())
tab = []
dt = 0
df = 100
for i in range(n):
pi = int(input())
tab.append(pi)

for i in range(1, len(tab)):
x = tab[i]
j = i
while j > 0 and  tab[j-1] > x :
tab[j] = tab[j - 1]
j -= 1
tab[j] = x
print(tab)

for i in range(tab):
Matthieu — 25/11/2021
Matthieu — 25/11/2021
Image
Image
Image
Image
Image
Image
Image
Image
Matthieu — 06/12/2021
J'avais pas compris que t'allais mal, bon rétablissement
Nagaty — 06/12/2021
ah tkt
mrc
Nagaty — 08/12/2021
https://codiizone.blogspot.com/2020/02/security-problem.html
    CodiiZone
Security Problem
Security Problem
Image
Matthieu — 08/12/2021
    ``
#include <iostream>
#include <string>

std::string evalCasino(std::string s) {
    int indexT = -1;
    int indexG = -1;
    int indexD = -1;

    for (int i = 0; i < s.size(); i++) {
        if (s[i] == 'T') {
            indexT = i;
        }
        if (s[i] == 'G') {
            indexG = i;
        }
        if (s[i] == '$') {
            indexD = i;
        }
    }
    if ((indexT < indexG && indexG < indexD) || (indexT > indexG && indexG > indexD)) {
        return "Quiet";
    }
    else {
        return "ALARM";
    }



}




int main() {
    std::cout << evalCasino("xxGxxx$xxxxxT") << std::endl;
    std::cout << evalCasino("xxT$G") << std::endl;
    std::cout << evalCasino("$GT") << std::endl;
    std::cout << evalCasino("TxxGxxxx$") << std::endl;

}
Nagaty — 08/12/2021
merci
Matthieu — 08/12/2021
dr
pas de gif
Matthieu — 13/12/2021
Tu as déjà envoyé ton texte ?
    Nagaty — 13/12/2021
nn
pk
Matthieu — 13/12/2021
Tu voulais pas que je te le corrige ?
    Nagaty — 14/12/2021
le lien pour le rendu des cartes c'est quoi
stp
Matthieu — 15/12/2021
Je crois qu'il est sur le drive du lien sur la discussion #ps1
Matthieu — 05/01/2022
Arme a1;
Arme a2;

a1.setName("Papier Journal");
a1.setDamage(30);
a1.setRange(1.5);
a1.setAtkSpeed(50);
a1.setCanEquip(true);
showInfoArme(a1);

cout << endl;

a2.setName("Papier Carton");
a2.setDamage(70);
a2.setRange(2);
a2.setAtkSpeed(35);
a2.setCanEquip(false);
showInfoArme(a2);
Matthieu — 12/01/2022
https://github.com/Eyerward/Pong
    GitHub
GitHub - Eyerward/Pong: Un Pong en JS
Un Pong en JS. Contribute to Eyerward/Pong development by creating an account on GitHub.

    Matthieu — 12/01/2022
Arme Arme::operator+(Arme other)
{
    Arme temp;
    temp.setName(getName() + other.getName());
    temp.setDamage(getDamage() + other.getDamage());
    temp.setRange(getRange() + other.getRange());
    temp.setAtkSpeed(getAtkSpeed() + other.getAtkSpeed());
    if (getCanEquip() || other.getCanEquip()){
        temp.setCanEquip(true);
    }
    else {
        temp.setCanEquip(false);
    }
    return temp;
}
Matthieu — 13/01/2022
Image
Matthieu — Aujourd’hui à 13:16
body{
    font-family: Arial, sans-serif;
    font-size: 30px;
    background-color: #000000;
    text-align: center;
}
a{
    color: #808080;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 1s;
}
a:hover{
    color: #ffffff;
    text-decoration: underline;
}
a:visited{
    color: #ffffff;
}
#game{
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;

}
canvas{
    outline: 1px solid #333;
}
/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        this.load.image('ball','assets/cercle.png')
        this.load.image('square','assets/carre.png')
    }

    create(){
        this.hauteur = 500
        this.largeur = 1000

        //Mur Haut
        this.haut=this.physics.add.image(0,0,'square').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        //Mur Bas
        this.bas=this.physics.add.image(0,this.hauteur-20,'square').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        //Balle
        this.balle = this.physics.add.image(this.largeur/2,this.hauteur/2,'ball').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.2,1.2);
        this.balle.body.setVelocityX(Phaser.Math.Between(-200,200));
        this.balle.body.setVelocityY(Phaser.Math.Between(-100,100));
        this.balle.body.setMaxVelocity(2000,1000);

        //Raquette Gauche
        this.gauche=this.physics.add.image(10,this.hauteur/2,'square').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);
        this.gauche.body.setVelocityY(0);

        //Raquette Droite
        this.droite=this.physics.add.image(this.largeur-40,this.hauteur/2,'square').setOrigin(0,0);
        this.droite.setDisplaySize(20,100);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);
        this.droite.body.setVelocityY(0);

        //Rebonds
        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
        this.physics.add.collider(this.balle,this.gauche);
        this.physics.add.collider(this.balle,this.droite);


        /**On compte les points sinon on s'emmerde**/

        this.data.set('j1', 0);
        this.data.set('j2', 0);

        this.J1 = this.add.text(100, 30, '', { font: '40px Courier', fill: '#808080' });
        this.J1.setText([
            'J1: ' + this.data.get('j1')
        ]);

        this.J2 = this.add.text(800, 30, '', { font: '40px Courier', fill: '#808080' });
        this.J2.setText([
            'J2: ' + this.data.get('j2')
        ]);

        /**this.gauche.speed=0;
         this.droite.speed=0;
         this.gauche.scrollFactorY=1;
         this.droite.scrollFactorY=1;*/

        this.initkeyboard()

    }

    initkeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.gauche.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.droite.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(500);
                    break;
                ... (44 lignes restantes)
                    Réduire
                    message.txt
                    6 Ko
﻿
/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        this.load.image('ball','assets/cercle.png')
        this.load.image('square','assets/carre.png')
    }

    create(){
        this.hauteur = 500
        this.largeur = 1000

        //Mur Haut
        this.haut=this.physics.add.image(0,0,'square').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        //Mur Bas
        this.bas=this.physics.add.image(0,this.hauteur-20,'square').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        //Balle
        this.balle = this.physics.add.image(this.largeur/2,this.hauteur/2,'ball').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.2,1.2);
        this.balle.body.setVelocityX(Phaser.Math.Between(-200,200));
        this.balle.body.setVelocityY(Phaser.Math.Between(-100,100));
        this.balle.body.setMaxVelocity(2000,1000);

        //Raquette Gauche
        this.gauche=this.physics.add.image(10,this.hauteur/2,'square').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);
        this.gauche.body.setVelocityY(0);

        //Raquette Droite
        this.droite=this.physics.add.image(this.largeur-40,this.hauteur/2,'square').setOrigin(0,0);
        this.droite.setDisplaySize(20,100);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);
        this.droite.body.setVelocityY(0);

        //Rebonds
        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
        this.physics.add.collider(this.balle,this.gauche);
        this.physics.add.collider(this.balle,this.droite);


        /**On compte les points sinon on s'emmerde**/

        this.data.set('j1', 0);
        this.data.set('j2', 0);

        this.J1 = this.add.text(100, 30, '', { font: '40px Courier', fill: '#808080' });
        this.J1.setText([
            'J1: ' + this.data.get('j1')
        ]);

        this.J2 = this.add.text(800, 30, '', { font: '40px Courier', fill: '#808080' });
        this.J2.setText([
            'J2: ' + this.data.get('j2')
        ]);

        /**this.gauche.speed=0;
         this.droite.speed=0;
         this.gauche.scrollFactorY=1;
         this.droite.scrollFactorY=1;*/

        this.initkeyboard()

    }

    initkeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.gauche.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.droite.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(500);
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(0);
                    break;
            }
        });
    }

    update(){
        if(this.balle.x > this.largeur){
            this.data.values.j1 += 1;
            this.balle.x = this.largeur/2;
            this.balle.y = this.hauteur/2;
            this.balle.body.setVelocityX(Phaser.Math.Between(-200,200));
            this.balle.body.setVelocityY(Phaser.Math.Between(-100,100));
        }
        if(this.balle.x < 0){
            this.data.values.j2 += 1;
            this.balle.x = this.largeur/2;
            this.balle.y = this.hauteur/2;
            this.balle.body.setVelocityX(Phaser.Math.Between(-200,200));
            this.balle.body.setVelocityY(Phaser.Math.Between(-100,100));
        }
        if(this.balle.y < 0){
            this.balle.y = 0
        }
        if(this.balle.y > this.hauteur){
            this.balle.y = this.hauteur
        }
        /**this.gauche.scrollY=this.gauche.speed;
         this.droite.scrollY=this.droite.speed;*/
    }
}
                    message.txt
                    6 Ko