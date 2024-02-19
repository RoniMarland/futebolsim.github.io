export function homeButtons(clubData){
    const newGameBtn = document.querySelector('.newGameBtn');    
    const loadGameBtn = document.querySelector('.loadGameBtn');    
    const selectClubBox = document.querySelector('.selectClubBox');  

    const newGame = () => {
        newGameBtn.parentNode.removeChild(newGameBtn);
        loadGameBtn.parentNode.removeChild(loadGameBtn);
        selectClubBox.style.display = 'flex';        
    };

    newGameBtn.onclick = newGame;

    const selectTeamBtn = document.querySelectorAll('.selectClubBtn');

    selectTeamBtn.forEach((selectedTeamBtn) => {
        selectedTeamBtn.addEventListener('click', function() {
    
            // Redefinir a cor de fundo de todos os botões
            selectTeamBtn.forEach((btn) => {
                btn.style.backgroundColor = ''; // ou outra cor padrão, se desejar
            });
    
            let clickedTeamId = parseInt(selectedTeamBtn.id);
            console.log('ID do Botão Clicado:', clickedTeamId);
    
            // Encontrar o clube na base de dados pelo índice
            let selectedClub = clubData.clubs[clickedTeamId];
            let selectedClubName = selectedClub.name;
            console.log('Nome do Clube Selecionado:', selectedClubName);
    
            // Ajustar a cor de fundo do botão clicado para a cor primária
            let primaryColor = selectedClub.colors[0].primary;
            selectedTeamBtn.style.backgroundColor = primaryColor;

            const mainContainer = document.querySelector('.mainContainer');
            mainContainer.style.backgroundColor = primaryColor
    
        });
    });
    
    
    
}
