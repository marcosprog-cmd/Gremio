const pdfFiles = {
    "Ata de Reuniões": [
        /*{ name: "Ata_2023-01-01.pdf", url: "pdfs/Ata_2023-01-01.pdf" },*/ 
        
    ],
    "Prestação de Contas": [
        { name: "TrasparenciaFiscal_2023.pdf", url: "pdf/Prestação de Contas Anual - 2023.pdf" },
        
    ],
    "Ofícios": [
        { name: "Oficio-Halloween_2023.pdf", url: "pdf/Ofício - Halloween 2023.pdf" },
        
    ]
};

window.onload = function() {
    const atasDiv = document.getElementById('atas');
    const prestacaoDeContasDiv = document.getElementById('prestacaoDeContas');
    const oficiosDiv = document.getElementById('oficios');

    Object.keys(pdfFiles).forEach(function(category) {
        const files = pdfFiles[category];
        const categoryDiv = getCategoryDiv(category);

        files.forEach(function(pdf) {
            const fileLink = createFileLink(pdf);
            categoryDiv.appendChild(fileLink);
        });
    });
};

function getCategoryDiv(category) {
    let categoryDiv = null;
    switch(category) {
        case "Ata de Reuniões":
            categoryDiv = document.getElementById('atas');
            break;
        case "Prestação de Contas":
            categoryDiv = document.getElementById('prestacaoDeContas');
            break;
        case "Ofícios":
            categoryDiv = document.getElementById('oficios');
            break;
    }
    return categoryDiv;
}

function createFileLink(pdf) {
    const fileLink = document.createElement('a');
    fileLink.href = pdf.url;
    fileLink.textContent = pdf.name;
    fileLink.setAttribute('target', '_blank');
    return fileLink;
}
