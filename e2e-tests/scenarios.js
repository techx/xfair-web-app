'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('XFair 2017 Application', function() {

  describe('companyList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the company list as a user types into the search box', function() {
      var companyList = element.all(by.repeater('company in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(companyList.count()).toBe(20);

      query.sendKeys('google');
      expect(phoneList.count()).toBe(61);

      query.clear();
      query.sendKeys('oracle');
      expect(phoneList.count()).toBe(28);
    });

    it('should be possible to control company order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var companyNameColumn = element.all(by.repeater('company in $ctrl.companies').column('company.name'));

      function getNames() {
        return companyNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('machine');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Google\u2122',
        'Oracle\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'Oracle\u2122',
        'Google\u2122'
      ]);
    });

  });

});