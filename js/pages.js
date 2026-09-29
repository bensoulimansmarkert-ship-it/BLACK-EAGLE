"use strict";
const BEPage={
 data:{},
 init(){this.data={destinations:destinationsData,trips:tripsData,hotels:hotelsData,offers:offersData};this.bindGlobal();this.route();},
 bindGlobal(){
  const btn=document.getElementById("mobileMenuBtn"),nav=document.getElementById("mobileNavigation"),close=document.getElementById("mobileNavClose");
  const toggle=open=>{if(!nav)return;nav.classList.toggle("open",open);nav.setAttribute("aria-hidden",String(!open));document.body.classList.toggle("menu-open",open);btn?.setAttribute("aria-expanded",String(open));};
  btn?.addEventListener("click",()=>toggle(!nav.classList.contains("open")));close?.addEventListener("click",()=>toggle(false));nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>toggle(false)));
  window.addEventListener("scroll",()=>document.querySelector(".site-header")?.classList.toggle("scrolled",scrollY>60),{passive:true});
  const y=document.getElementById("currentYear");if(y)y.textContent=new Date().getFullYear();
 },
 layout(title,subtitle,content){return `<div class="inner-page"><section class="inner-hero"><div class="container"><div class="section-kicker">BLACK EAGLE TRAVEL & TOURISM</div><h1>${title}</h1><p>${subtitle}</p></div></section><section class="inner-content"><div class="container">${content}</div></section></div>`;},
 card(x,type){
  const title=x.titleAr||x.nameAr||"",desc=x.descriptionAr||x.countryAr||x.locationAr||"",price=x.price??x.startingPrice??x.pricePerNight,image=(x.image||"assets/images/hero/hero.jpg").replace(/^assets\//,"../assets/");
  const href=type==="trip"?`trips.html?id=${x.id}`:type==="hotel"?`hotels.html?id=${x.id}`:type==="destination"?`destinations.html?id=${x.id}`:`bookings.html?offer=${x.id}`;
  const label=type==="trip"?"رحلة":type==="hotel"?"فندق":type==="destination"?"وجهة":"عرض";
  return `<article class="content-card"><img src="${image}" alt="${title}" loading="lazy"><div class="content-card-body"><span class="tag">${label}</span><h3>${title}</h3><p>${desc}</p><div class="meta-row"><span class="price">${price!=null?formatCurrency(price):""}</span><a class="gold-btn" href="${href}">التفاصيل <span class="btn-arrow">←</span></a></div></div></article>`;
 },
 mount(title,subtitle,content){document.querySelector("main").innerHTML=this.layout(title,subtitle,content);},
 route(){switch(location.pathname.split("/").pop()){case"destinations.html":return this.destinations();case"trips.html":return this.trips();case"hotels.html":return this.hotels();case"visas.html":return this.visas();case"bookings.html":return this.bookings();case"contact.html":return this.contact();}},
 destinations(){
  const id=new URLSearchParams(location.search).get("id");
  if(id){const d=getDestinationById(id);if(!d)return this.mount("الوجهة غير موجودة","تعذر العثور على الوجهة المطلوبة.",'<div class="empty-state">الوجهة غير متاحة.</div>');const trips=getTripsByDestination(id);this.mount(d.nameAr,d.descriptionAr,`<div class="detail-layout"><div><img class="detail-image" src="${d.image.replace(/^assets\//,"../assets/")}" alt="${d.nameAr}"></div><div class="detail-panel"><span class="tag">${d.countryAr}</span><h2>${d.cityAr}</h2><p>${d.descriptionAr}</p><div class="price" style="margin-top:18px">يبدأ من ${formatCurrency(d.startingPrice)}</div><div class="page-actions"><a class="gold-btn" href="bookings.html?destination=${d.id}">اطلب حجزًا</a><a class="outline-btn" href="trips.html?destination=${d.id}">عرض الرحلات</a></div></div></div>${trips.length?`<div style="margin-top:50px"><div class="section-heading"><h2>رحلات هذه الوجهة</h2></div><div class="cards-grid">${trips.map(t=>this.card(t,"trip")).join("")}</div></div>`:""}`);return;}
  this.mount("وجهاتنا","اختر وجهتك القادمة واكتشف تجارب صممناها بعناية.",`<div class="filters-bar"><input id="pageSearch" placeholder="ابحث عن وجهة..."><select id="pageSort"><option value="">الترتيب</option><option value="price">السعر</option><option value="name">الاسم</option></select></div><div class="cards-grid" id="pageCards">${this.data.destinations.filter(x=>x.active).map(x=>this.card(x,"destination")).join("")}</div>`);this.filterCards(this.data.destinations,"destination");
 },
 trips(){
  const q=new URLSearchParams(location.search),id=q.get("id");
  if(id){const t=getTripById(id);if(!t)return this.mount("الرحلة غير موجودة","تعذر العثور على الرحلة المطلوبة.",'<div class="empty-state">الرحلة غير متاحة.</div>');this.mount(t.titleAr,t.descriptionAr,`<div class="detail-layout"><div><img class="detail-image" src="${t.image.replace(/^assets\//,"../assets/")}" alt="${t.titleAr}"></div><div class="detail-panel"><span class="tag">${t.durationDays} أيام / ${t.durationNights} ليالي</span><h2>${t.titleAr}</h2><p>${t.descriptionAr}</p><div class="price" style="margin-top:18px">${formatCurrency(t.price)}</div><ul class="list-clean">${t.includes.map(x=>`<li>✓ ${x}</li>`).join("")}</ul><div class="page-actions"><a class="gold-btn" href="bookings.html?trip=${t.id}">احجز الرحلة</a></div></div></div>`);return;}
  this.mount("الرحلات السياحية","برامج مرنة للعائلات وشهر العسل والرحلات الفاخرة والمغامرات.",`<div class="filters-bar"><input id="pageSearch" placeholder="ابحث عن رحلة..."><select id="pageCategory"><option value="">كل الفئات</option>${tripCategoriesData.map(c=>`<option value="${c.id}">${c.nameAr}</option>`).join("")}</select></div><div class="cards-grid" id="pageCards">${this.data.trips.filter(x=>x.active).map(x=>this.card(x,"trip")).join("")}</div>`);this.filterCards(this.data.trips,"trip");
 },
 hotels(){
  const id=new URLSearchParams(location.search).get("id");
  if(id){const h=getHotelById(id);if(!h)return this.mount("الفندق غير موجود","تعذر العثور على الفندق المطلوب.",'<div class="empty-state">الفندق غير متاح.</div>');const stars="★".repeat(h.stars);const facilities=h.facilities.map(x=>`<li>✓ ${x}</li>`).join("");this.mount(h.nameAr,`إقامة ${h.stars} نجوم في وجهة مميزة.`,`<div class="detail-layout"><div><img class="detail-image" src="${h.image.replace(/^assets\//,"../assets/")}" alt="${h.nameAr}"></div><div class="detail-panel"><span class="tag">${stars}</span><h2>${h.nameAr}</h2><p>${h.roomTypeAr}</p><div class="price" style="margin-top:18px">${formatCurrency(h.pricePerNight)} / ليلة</div><ul class="list-clean">${facilities}</ul><div class="page-actions"><a class="gold-btn" href="bookings.html?hotel=${h.id}">اطلب حجز الفندق</a></div></div></div>`);return;}
  this.mount("الفنادق","إقامات مختارة بعناية لتكمل تجربة السفر.",`<div class="cards-grid">${this.data.hotels.filter(x=>x.active).map(x=>this.card(x,"hotel")).join("")}</div>`);
 },
 visas(){
  const items=["تأشيرة سياحية","تأشيرة عمل","استشارات سفر"];const desc=["مساعدة في تجهيز متطلبات التأشيرات السياحية.","مراجعة المستندات وإرشادات التقديم.","تحديد المستندات والمتطلبات قبل التقديم."];const icons=["fa-passport","fa-briefcase","fa-file-circle-check"];
  this.mount("خدمات التأشيرات","مساعدة عملية في تجهيز طلبات السفر والتأشيرات حسب الوجهة.",`<div class="cards-grid">${items.map((x,i)=>`<article class="content-card"><div class="content-card-body"><span class="tag"><i class="fa-solid ${icons[i]}"></i></span><h3>${x}</h3><p>${desc[i]}</p><div class="page-actions"><a class="gold-btn" href="bookings.html?service=visa">ابدأ طلبك</a></div></div></article>`).join("")}</div>`);
 },
 bookings(){
  const q=new URLSearchParams(location.search),dest=q.get("destination")||"",trip=q.get("trip")||"";
  this.mount("الحجوزات","أرسل طلبك وسيتواصل معك فريق بلاك إيجل لتأكيد التفاصيل والسعر النهائي.",`<div class="detail-panel"><form id="bookingPageForm"><div class="form-grid"><div class="form-group"><label>الاسم الكامل *</label><input class="form-control" name="name" required></div><div class="form-group"><label>البريد الإلكتروني *</label><input class="form-control" type="email" name="email" required></div><div class="form-group"><label>رقم الهاتف *</label><input class="form-control" name="phone" required></div><div class="form-group"><label>الوجهة *</label><select class="form-control" name="destination" required><option value="">اختر</option>${destinationsData.map(d=>`<option value="${d.id}" ${d.id===dest?"selected":""}>${d.nameAr}</option>`).join("")}</select></div><div class="form-group"><label>الرحلة</label><select class="form-control" name="trip"><option value="">اختياري</option>${tripsData.map(t=>`<option value="${t.id}" ${t.id===trip?"selected":""}>${t.titleAr}</option>`).join("")}</select></div><div class="form-group"><label>تاريخ السفر *</label><input class="form-control" type="date" name="travelDate" required></div><div class="form-group"><label>عدد المسافرين</label><input class="form-control" type="number" min="1" value="1" name="travelers"></div><div class="form-group"><label>نوع الخدمة</label><select class="form-control" name="type"><option value="trip">رحلة</option><option value="hotel">فندق</option><option value="visa">تأشيرة</option><option value="custom">رحلة مخصصة</option></select></div><div class="form-group full"><label>ملاحظات</label><textarea class="form-control" name="notes" rows="5"></textarea></div></div><button class="gold-btn" type="submit">إرسال طلب الحجز</button><div class="form-status" id="bookingStatus"></div></form></div>`);
  document.getElementById("bookingPageForm").addEventListener("submit",e=>{
   e.preventDefault();
   const fd=new FormData(e.currentTarget);
   const bookings=loadDataFromStorage(STORAGE_KEYS.bookings,bookingsData);
   const customers=loadDataFromStorage(STORAGE_KEYS.customers,customersData);
   const invoices=loadDataFromStorage(STORAGE_KEYS.invoices,invoicesData);
   const journals=loadDataFromStorage(STORAGE_KEYS.journalEntries,journalEntriesData);
   const travelers=Math.max(1,Number(fd.get("travelers")||1));
   const tripId=fd.get("trip")||"";
   const trip=tripId?getTripById(tripId):null;
   const total=trip?Number(trip.price||0)*travelers:0;
   let customer=customers.find(c=>c.email===fd.get("email")||c.phone===fd.get("phone"));
   if(!customer){
    customer={id:generateId("CUS"),customerNumber:String(10000+customers.length+1),nameAr:fd.get("name"),nameEn:fd.get("name"),phone:fd.get("phone"),email:fd.get("email"),nationality:"",customerType:"individual",status:"active",createdAt:new Date().toISOString()};
    customers.push(customer);saveDataToStorage(STORAGE_KEYS.customers,customers);
   }
   const now=new Date().toISOString();
   const item={id:generateId("BK"),bookingNumber:generateBookingNumber(),customerId:customer.id,type:fd.get("type"),destinationId:fd.get("destination"),tripId,travelDate:fd.get("travelDate"),travelers,adults:travelers,children:0,infants:0,status:"pending",paymentStatus:"unpaid",currency:"USD",subtotal:total,discount:0,tax:0,total,paidAmount:0,dueAmount:total,notes:fd.get("notes"),createdAt:now,updatedAt:now,customer:{name:fd.get("name"),email:fd.get("email"),phone:fd.get("phone")}};
   bookings.push(item);saveDataToStorage(STORAGE_KEYS.bookings,bookings);
   const invoice={id:generateId("INV"),invoiceNumber:generateInvoiceNumber(),bookingId:item.id,customerId:customer.id,issueDate:now.slice(0,10),dueDate:now.slice(0,10),status:"issued",currency:"USD",subtotal:total,discount:0,tax:0,total,paidAmount:0,dueAmount:total,items:trip?[{descriptionAr:trip.titleAr,descriptionEn:trip.titleEn,quantity:travelers,unitPrice:Number(trip.price||0),total}]:[],notes:""};
   invoices.push(invoice);saveDataToStorage(STORAGE_KEYS.invoices,invoices);
   if(total>0){journals.push({id:generateId("JE"),entryNumber:generateJournalEntryNumber(),date:now.slice(0,10),descriptionAr:"إثبات فاتورة حجز "+item.bookingNumber,descriptionEn:"Booking invoice "+item.bookingNumber,referenceType:"invoice",referenceId:invoice.id,lines:[{accountId:"ACC-1300",debit:total,credit:0},{accountId:item.type==="hotel"?"ACC-4200":item.type==="visa"?"ACC-4300":"ACC-4100",debit:0,credit:total}]});saveDataToStorage(STORAGE_KEYS.journalEntries,journals);}
   const queue=loadDataFromStorage("blackEagle_accountingQueue",[]);queue.push({type:"NEW_BOOKING",booking:item,timestamp:now,processed:false});saveDataToStorage("blackEagle_accountingQueue",queue);
   document.getElementById("bookingStatus").textContent="تم استلام طلبك بنجاح. رقم الطلب: "+item.bookingNumber+" — الإجمالي: "+formatCurrency(total);e.currentTarget.reset();
  });
 },
 contact(){
  this.mount("تواصل معنا","يسعدنا مساعدتك في حجز رحلتك أو الإجابة عن أي استفسار.",`<div class="detail-layout"><div class="detail-panel"><h2>بيانات التواصل</h2><ul class="list-clean"><li>الهاتف: ${BLACK_EAGLE_CONFIG.contact.phone}</li><li>البريد: ${BLACK_EAGLE_CONFIG.contact.email}</li><li>واتساب: ${BLACK_EAGLE_CONFIG.contact.whatsapp}</li></ul></div><div class="detail-panel"><form id="contactPageForm"><div class="form-grid"><div class="form-group"><label>الاسم *</label><input class="form-control" name="name" required></div><div class="form-group"><label>البريد *</label><input class="form-control" type="email" name="email" required></div><div class="form-group full"><label>الموضوع</label><input class="form-control" name="subject"></div><div class="form-group full"><label>الرسالة *</label><textarea class="form-control" name="message" rows="6" required></textarea></div></div><button class="gold-btn" type="submit">إرسال الرسالة</button><div class="form-status" id="contactStatus"></div></form></div></div>`);
  document.getElementById("contactPageForm").addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(e.currentTarget),list=loadDataFromStorage("blackEagle_contactMessages",[]);list.push({id:generateId("MSG"),name:fd.get("name"),email:fd.get("email"),subject:fd.get("subject"),message:fd.get("message"),createdAt:new Date().toISOString(),status:"new"});saveDataToStorage("blackEagle_contactMessages",list);document.getElementById("contactStatus").textContent="تم إرسال رسالتك بنجاح.";e.currentTarget.reset();});
 },
 filterCards(items,type){const search=document.getElementById("pageSearch"),category=document.getElementById("pageCategory"),box=document.getElementById("pageCards"),render=()=>{let a=items.filter(x=>x.active);const q=(search?.value||"").trim().toLowerCase();if(q)a=a.filter(x=>JSON.stringify(x).toLowerCase().includes(q));if(category?.value)a=a.filter(x=>x.categoryId===category.value);box.innerHTML=a.map(x=>this.card(x,type)).join("")||'<div class="empty-state">لا توجد نتائج مطابقة.</div>';};search?.addEventListener("input",render);category?.addEventListener("change",render);}
};
document.addEventListener("DOMContentLoaded",()=>BEPage.init());
