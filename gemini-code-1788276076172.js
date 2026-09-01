// Tab Switching logic for Day 1 Options
function switchTab(event, tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Interactive Packing Checklist Tracker
function updateProgress() {
  const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
  const total = checkboxes.length;
  let checkedCount = 0;

  checkboxes.forEach(box => {
    if (box.checked) {
      checkedCount++;
    }
  });

  const percentage = (checkedCount / total) * 100;
  document.getElementById('progress-bar').style.width = percentage + '%';
  document.getElementById('checklist-counter').innerText = `${checkedCount} / ${total} Completed`;
}