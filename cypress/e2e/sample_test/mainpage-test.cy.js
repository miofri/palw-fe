describe('testing cypress for the first time', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('renders 3 boxes on top', () => {
		cy.get(`[data-testid=select-pals]`);
		cy.get(`[data-testid=palselect-1]`);
		cy.get(`[data-testid=palselect-2]`);
	});

	it('has 138 pals rendered', () => {
		cy.get(`[data-testid=breeding-pal-list] div`).should('have.length', 138);
	});
});
