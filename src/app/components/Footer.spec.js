import angular from 'angular';
import 'angular-mocks';
import {Footer} from './Footer.js';

describe('Footer component', () => {
  beforeEach(() => {
    angular
      .module('footerComponent', ['src/app/components/Footer.html'])
      .component('footerComponent', Footer);
    angular.mock.module('footerComponent');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.activeCount = 2;
    const element = $compile('<footer-component active-count="activeCount"></footer-component>')($scope);
    $scope.$digest();
    const footer = element.find('strong');
    expect(footer.html().trim()).toEqual('2');
  }));

  it('shoud call onClearCompleted', angular.mock.inject($componentController => {
    const bindings = {
      onClearCompleted: () => {}
    };
    const component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onClearCompleted').and.callThrough();
    component.handleClear();
    expect(component.onClearCompleted).toHaveBeenCalled();
  }));

  it('shoud call onShow', angular.mock.inject($componentController => {
    const bindings = {
      onShow: () => {}
    };
    const component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onShow').and.callThrough();
    component.handleChange('show_all');
    expect(component.onShow).toHaveBeenCalledWith({filter: 'show_all'});
  }));
});

