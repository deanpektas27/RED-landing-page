const btn = document.querySelectorAll('#applybtn');
btn.forEach((btn) => {
    btn.addEventListener( 'click', () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdDWdkC8PxOllUVBJJL0yxanAp8692KZY-l16EFJnSshwM6zQ/viewform', '_blank');
    });
});