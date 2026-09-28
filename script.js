
const modal=document.getElementById('cvModal');
const open=document.getElementById('cvOpen');
const close=document.getElementById('cvClose');
if(open) open.onclick=()=>modal.classList.add('show');
if(close) close.onclick=()=>modal.classList.remove('show');
if(modal) modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});

const search=document.getElementById('siteSearch');
if(search){
 search.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  const q=search.value.trim().toLowerCase();
  if(!q)return;
  const map={home:'index.html',education:'Education.html',experience:'Experience.html',projects:'Projects.html',skills:'Skills.html'};
  for(const k in map){if(k.includes(q)||q.includes(k)){location.href=map[k];break}}
 });
}
