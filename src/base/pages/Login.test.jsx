import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Pagina de Login', () => {
  const login = shallow(<Login />);

  it('deve renderizar sem problemas', () => {
    expect(login).toMatchSnapshot();
  });

  describe('Formulário de Login', () => {
    it('tem de haver um formulário na pagina', () => {
      expect(login.find('Form').exists()).toBe(true);
    });

    it('tem que ter um input para o e-mail de login', () => {
      expect(login.find('#email').exists()).toBe(true);
    });

    it('tem que ter um input para a senha de login', () => {
      expect(login.find('#pass').exists()).toBe(true);
    });

    describe('Quando o usuário digita no input de e-mail', () => {
      const email = 'john@mail.com';

      beforeEach(() => {
        login.find('#email').simulate('change', { target: { value: email } });
      });

      it('atualiza o valor do state inserindo o que foi digitado no input', () => {
        expect(login.state().email).toBe(email);
      });
    });

    describe('Quando o usuário digita no input de senha', () => {
      const pass = '123456';

      beforeEach(() => {
        login.find('#pass').simulate('change', { target: { value: pass } });
      });

      it('atualiza o valor do state inserindo o que foi digitado no input', () => {
        expect(login.state().pass).toBe(pass);
      });
    });
  });

  describe('Mensagem de Novo Cadastro', () => {
    it('tem que ter uma mensagem com link para novos cadastros', () => {
      expect(login.find('Message').exists()).toBe(true);
    });

    it('tem que ter o link para a rota de novos cadastros', () => {
      expect(login.find('Message > a').exists()).toBe(true);
    });
  });
});
