describe('Тестируем покупку аватара', function () {
    it('Валидные данные', function () {
        // Логин
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('Укажите ваш логин');
        cy.get('#password').type('Укажите ваш пароль');
        cy.get('.auth__button').click();

        // Переход в магазин
        cy.get('.header__btns > [href="/shop"]').click();

        // Выбор случайного аватара в магазине
        const randomIndex = Math.floor(Math.random() * 12) + 1;  // здесь мы генерируемслучайное число от 1 до 12, можно его убрать, а в след строке кода менять число самому
        cy.get(`:nth-child(${randomIndex}) > .shop__button`).click();  // здесь вместо ${randomIndex} можно указывать число от 1 до 12

        // Ввод данных карты
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Fedor Ivanov');

        // Проверка и нажатие на кнопку оплаты
        cy.get('.pay-btn')
            .should('be.enabled')
            .click();

        // Ввод смс кода и подтверждение оплаты
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();

        // Проверка успешной покупки
        cy.get('.payment__adv').should('exist');
        cy.contains('Покупка прошла успешно');
    })
})
