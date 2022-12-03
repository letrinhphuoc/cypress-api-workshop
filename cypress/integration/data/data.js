let rowsLength;
describe('Data Driven Testing Using Excel FIle', () => {
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
    })
    it('Data Driven: Register User', () => {
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.log(data.rows[i].firstName);
                cy.log(data.rows[i].lastName);
                cy.log(data.rows[i].username);
                cy.log(data.rows[i].password);
            }
        })
    })
})

