// Script simples para alterar o color do body em dark mode

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-pink')
});