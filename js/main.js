const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function resetTabs() {
  tabItems.forEach(tabItem => tabItem.classList.remove('tab-border'));
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function selectItem(e) {
  resetTabs();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  if (tabContentItem) {
    tabContentItem.classList.add('show');
  }
}

tabItems.forEach(tabItem => tabItem.addEventListener('click', selectItem));
