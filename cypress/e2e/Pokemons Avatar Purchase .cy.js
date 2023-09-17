describe('Тестируем покупку аватара', function () {
   it('Валидные данные', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('укажите ваш логин');
        cy.get('#password').type('укажите ваш пароль');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        const randomIndex = Math.floor(Math.random() * 12) + 1;  // здесь мы генерируемслучайное число от 1 до 12, можно его убрать, а в след строке кода менять число самому
        cy.get(`:nth-child(${randomIndex}) > .shop__button`).click();  // здесь вместо ${randomIndex} можно указывать число от 1 до 12
        cy.get('.pay__select-block').should('exist').should('be.visible');
        cy.get('.payment__info-text-new').should('exist').should('be.visible');
        cy.get('.payment__info-button-v2').should('exist').should('be.visible');
        cy.get('.payment__info-button-v2').click();
        cy.get('.payment__subblock').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(1)').should('exist').should('be.visible');
        cy.get('.payment__subblock > .payment__shopname').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(3)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(4)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(5)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(6)').should('exist').should('be.visible');
        cy.get('.pay__payform-v2').should('exist').should('be.visible');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111').should('exist').should('be.visible');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224').should('exist').should('be.visible');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125').should('exist').should('be.visible');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Fedor Ivanov').should('exist').should('be.visible');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.pay__select-block').should('exist').should('be.visible');
        cy.get('.payment__info-text-new').should('exist').should('be.visible');
        cy.get('.payment__info-button-v2').should('exist').should('be.visible');
        cy.get('.payment__info-button-v2').click();
        cy.get('.payment__subblock').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(1)').should('exist').should('be.visible');
        cy.get('.payment__subblock > .payment__shopname').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(3)').should('exist').should('be.visible');
        cy.get('.payment__span_number').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(5)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(6)').should('exist').should('be.visible');
        cy.get('.payment__form-defolt').should('exist').should('be.visible');
        cy.get('#cardnumber').type('56456').should('exist').should('be.visible');
        cy.get('.payment__span-defolt').should('exist').should('be.visible');
        cy.get('.payment__defolt-decline').should('exist').should('be.visible');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').should('exist').should('be.visible');
        cy.contains('Покупка прошла успешно').should('exist').should('be.visible');
        cy.get('.payment__info-button-v2').click();
        cy.get('.payment__subblock').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(1)').should('exist').should('be.visible');
        cy.get('.payment__subblock > .payment__shopname').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(3)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(4)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(5)').should('exist').should('be.visible');
        cy.get('.payment__subblock > :nth-child(6)').should('exist').should('be.visible');
        cy.get('.payment__adv').should('exist').should('be.visible');
           })
})
