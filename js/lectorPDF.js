myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

pdfjsLib.getDocument('./pdfs/ManualdeGuitarra').then((pdf) => {
    myState.pdf = pdf
    render()
})

function render(){
    myState.pdf.getPage(myState.currentPage).then((page) => {
        canvas = document.querySelector("#pdf_renderer")
        ctx = canvas.getContext('2d')

        viewport = page.getViewport(myState.zoom)

        canvas.width = viewport.width;
        canvas.height = viewport.height;
    })
}

page.render({
    canvaContext: ctx,
    viewport: viewport
})