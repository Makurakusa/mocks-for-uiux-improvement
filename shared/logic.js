// 共有ビジネスロジック(集計・フィルタ・ソート・検証などの純粋関数)。
// Before(original) / After(improved) の両方から読み込まれる。

const PRIORITY_ORDER = { '高': 3, '中': 2, '低': 1 };

export function isOverdue(task, now = new Date('2026-09-21T00:00:00')) {
  if (!task.dueDate) return false;
  const due = new Date(`${task.dueDate}T00:00:00`);
  return due < now;
}

export function filterTasks(tasks, filters = {}) {
  const { memberIds = [], labelIds = [], dateRange = null, keyword = '' } = filters;
  return tasks.filter((task) => {
    if (memberIds.length > 0 && !memberIds.includes(task.assigneeId)) return false;
    if (labelIds.length > 0 && !task.labels.some((label) => labelIds.includes(label))) return false;
    if (dateRange && dateRange[0] && dateRange[1]) {
      if (!task.dueDate) return false;
      const due = new Date(`${task.dueDate}T00:00:00`);
      if (due < new Date(dateRange[0]) || due > new Date(dateRange[1])) return false;
    }
    if (keyword && keyword.trim() !== '') {
      if (!task.title.includes(keyword.trim())) return false;
    }
    return true;
  });
}

export function sortTasks(tasks, sortKey = 'dueDate') {
  const sorted = [...tasks];
  sorted.sort((a, b) => {
    if (sortKey === 'priority') {
      return (PRIORITY_ORDER[b.priority] || 0) - (PRIORITY_ORDER[a.priority] || 0);
    }
    if (sortKey === 'createdAt') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  return sorted;
}

export function groupTasksByLane(tasks, lanes) {
  const map = {};
  lanes.forEach((lane) => { map[lane.id] = []; });
  tasks.forEach((task) => {
    if (!map[task.lane]) map[task.lane] = [];
    map[task.lane].push(task);
  });
  return map;
}

export function computeSummary(tasks, lanes, members, now = new Date('2026-09-21T00:00:00')) {
  const byLane = {};
  lanes.forEach((lane) => { byLane[lane.id] = 0; });
  const byMember = {};
  members.forEach((member) => { byMember[member.id] = 0; });
  let overdueCount = 0;
  tasks.forEach((task) => {
    if (byLane[task.lane] !== undefined) byLane[task.lane] += 1;
    if (task.assigneeId && byMember[task.assigneeId] !== undefined) byMember[task.assigneeId] += 1;
    if (task.lane !== 'done' && isOverdue(task, now)) overdueCount += 1;
  });
  return { byLane, byMember, overdueCount, total: tasks.length };
}

export function validateTask(task) {
  const errors = [];
  if (!task.title || task.title.trim() === '') errors.push('タスク名が未入力です');
  if (!task.assigneeId) errors.push('担当者が未設定です');
  if (!task.dueDate) errors.push('期限が未設定です');
  return errors;
}

export function priorityTagType(priority) {
  if (priority === '高') return 'danger';
  if (priority === '中') return 'warning';
  return 'info';
}

export function formatDate(dateStr) {
  if (!dateStr) return '未設定';
  const d = new Date(`${dateStr}T00:00:00`);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const datePart = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  return `${datePart} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
