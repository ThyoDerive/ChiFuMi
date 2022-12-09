const ScorePlayer = document.querySelector('.ScoreNumberPlayer')
const ScorePC = document.querySelector('.ScoreNumberPC')
const Result = document.querySelector('.Result')
const ButtonPlayer = document.querySelectorAll('.Button')
const PcChoice = document.querySelector('.PcChoice')
let PCScore = 0
let PlayerScore = 0

document.querySelector('.contrePC').addEventListener('click', () => {

    document.querySelector('.ChoixMode').style.display = 'none'

    ButtonPlayer.forEach((i) => {
        i.addEventListener('click', () => {
            if (PCScore == 3 || PlayerScore == 3) {

                document.querySelector('.Vainqueur').classList.add('VainqueurActive')

                if (PCScore > PlayerScore) {
                    document.querySelector('.ResultatFinal').innerHTML = 'Perdu'
                    document.querySelector('.PhraseFinal').innerHTML = 'Le PC à gagnez'
                }else {
                    console.log('Le player a gagnez');
                    document.querySelector('.ResultatFinal').innerHTML = 'Gagnez'
                    document.querySelector('.PhraseFinal').innerHTML = 'Le Player à gagnez'
                }
            }
            else{
                const PC = Math.floor(Math.random() * (4 - 1) + 1)

                console.log(i.id, PC);

                if (PC == 1) {
                    PcChoice.innerHtml = 'Pierre'
                }else if (PC == 2){
                    PcChoice.innerHTML = 'Feuille'
                }else {
                    PcChoice.innerHTML = 'Ciseaux'
                }

                if (PC == i.id) {
                    Result.innerHTML = "Egalite"
                }
                else if (PC == 3 && i.id == 2 || PC == 2 && i.id == 1 || PC == 1 && i.id == 3){
                    Result.innerHTML = 'Le pc le remporte'
                    PCScore ++
                    ScorePC.innerHTML = PCScore
                }
                else if (PC == 3 && i.id == 1 || PC == 1 && i.id == 2 || PC == 2 && i.id == 3){
                    Result.innerHTML = 'Le player le remporte'
                    PlayerScore ++
                    ScorePlayer.innerHTML = PlayerScore
                }
            }

        })
    })

    document.querySelector('.Replay').addEventListener('click', (e) => {
        window.location.reload()
    })
})