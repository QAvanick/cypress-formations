# Cypress-Formation

## Description
Ce projet est une configuration de base pour les tests automatisés avec **Cypress**.  
L’objectif est de tester le comportement d’une application web (navigation, interactions, pages) afin de garantir la fiabilité des fonctionnalités à chaque étape du développement.

Le projet inclut :
- l’installation et la configuration de Cypress,
- l’exécution des tests dans un navigateur (Chrome),
- un premier test simple de navigation,
- une structure prête pour écrire de nouveaux tests E2E.

---

## Avancement

### ✅ Ce qui a été fait
- [x] Initialisation du projet Node.js
- [x] Installation et configuration de Cypress
- [x] Ouverture de Cypress avec Chrome
- [x] Création du premier test de navigation (`firstTest.cy.js`)

### 🚧 Ce qui reste à faire
- [ ] Écriture de **tests formulaires**
- [ ] Tests de bout en bout sur les pages internes de l’application
- [ ] Mise en place de tests sur des flux utilisateurs (login, formulaire, etc.)
- [ ] Intégration continue (GitHub Actions, GitLab CI, etc.)

---

## Structure du projet

Voici la structure principale générée :


- **cypress/e2e/** → dossier des tests end-to-end  
- **fixtures/** → données de test statiques  
- **support/** → commandes globales / configuration  
- **cypress.config.js** → configuration de Cypress

---

## Lancement du projet

### 1. Installer les dépendances

Ouvre un terminal à la racine du projet et exécute :

```bash
npm install
npx cypress open
cypress/e2e/spec.cy.js

describe('Mon premier test Cypress', () => {
  it('ouvre la page principale et vérifie l’URL', () => {
    cy.visit('https://www.ayilla.com/')
    cy.url().should('include', 'ayilla.com')
  })
})
Auteurs
Vanick – Développeur du projet
