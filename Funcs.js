// Get scrollbar width

function getScrollBarWidth () {
    let div = document.createElement('div');
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);

    let scrollBarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollBarWidth;
}
