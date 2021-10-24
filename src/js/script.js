/*Хедер*/

$(document).ready(function() {
  $('.header__burger').click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.header-mobile').removeClass('active');
      $('body').removeClass('ov-hid');
    } else {
      $('.header__burger').addClass('active');
      $('.header-mobile').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});

/*Поиск в Хедере на мобиле*/

$(document).ready(function() {
  $(".header__search").click(function(){
    if ($(".header__search-box").hasClass('active')) {
      $(".header__search-box").removeClass('active');
      $(".header-search").removeClass('active');
    } else {
      $(".header__search-box").addClass('active');
      $(".header-search").addClass('active');
    }
  });
});

/*Слайдер героев*/

$(document).ready(function() {

  var swiperHero = new Swiper('.slider .swiper-container', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    /*observer: true,
    observeParents: true,
    observeSlideChildren: true,*/
    resizeObserver: true,
    navigation: {
      nextEl: '.slider .swiper-button-next',
      prevEl: '.slider .swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 0
      }
    }
    /*on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }*/
  });

  /*function initSwiper() {
    let swiperHero = new Swiper('.slider .swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
      centeredSlides: true,
      autoHeight: true,
      grabCursor: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev'
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 15
        }
      }
    });
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });*/
});

/*Слайдер памятников*/
$(document).ready(function() {
    var swiperMemorial = new Swiper('.underintro__slider .swiper-container', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoHeight: true,
      grabCursor: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.underintro__slider .swiper-button-next',
        prevEl: '.underintro__slider .swiper-button-prev'
      }
    });
});

/*Инпут выбор даты*/

$(document).ready(function() {
  /*$(".form_calendar").datepicker({
      dateFormat: "dd.mm.yy",
      minDate: null,
      showButtonPanel: true,
      changeMonth: false,
      changeYear: false,
      defaultDate: "+1w",
    },
  );*/
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '<',
    nextText: '>',
    currentText: 'Сегодня',
    monthNames: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    minDate: null,
    isRTL: false,
    showMonthAfterYear: false,
    showButtonPanel: true,
    yearSuffix: '',
    changeYear: true,
    changeMonth: true,
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $(".input-datepicker").datepicker($.datepicker.regional["ru"]);
  $("#person_search_form_birthDate").datepicker("option", "yearRange", "1933:2003");
  $("#person_search_form_birthDate").datepicker("option", "minDate", new Date(1933,  0 - 1, 1));
  $("#person_search_form_birthDate").datepicker("option", "maxDate", "-18y");
  $("#person_search_form_deathDate").datepicker("option", "yearRange", "1990:2021");
  $("#person_search_form_deathDate").datepicker("option", "minDate", new Date(1990,  0 - 1, 1));
  $("#person_search_form_deathDate").datepicker("option", "maxDate", "+0d");
  $("#event_search_form_date").datepicker("option", "yearRange", "1990:2021");
  $("#event_search_form_date").datepicker("option", "minDate", new Date(1990,  0 - 1, 1));
  $("#event_search_form_date").datepicker("option", "maxDate", "+0d");
  $("#place_search_form_openDate").datepicker("option", "yearRange", "1974:2021");
  $("#place_search_form_openDate").datepicker("option", "minDate", new Date(1974,  0 - 1, 1));
  $("#place_search_form_openDate").datepicker("option", "maxDate", "+0d");
  $(".input-datepicker").datepicker().datepicker("setDate");
  /*return datepicker.regional['ru'];*/

  $('.search__form button[type="reset"]').click(function(){
    $("#person_search_form_birthDate").attr("value", "");
    $("#person_search_form_deathDate").attr("value", "");
    $("#place_search_form_openDate").attr("value", "");
    $("#person_search_form_text").attr("value", "");
    $("#person_search_form_birthPlace").attr("value", "");
    $("#event_search_form_name").attr("value", "");
    $("#event_search_form_date").attr("value", "");
    $("#event_search_form_place").attr("value", "");

  });

  if ($("#person_search_form_birthDate").attr("value") !== false) {
    $("#person_search_form_birthDate").datepicker().datepicker("setDate", $("#person_search_form_birthDate").attr("value"));
  }

  if ($("#person_search_form_deathDate").attr("value") !== false) {
    $("#person_search_form_deathDate").datepicker().datepicker("setDate", $("#person_search_form_deathDate").attr("value"));
  }

  if ($("#place_search_form_openDate").attr("value") !== false) {
    $("#place_search_form_openDate").datepicker().datepicker("setDate", $("#place_search_form_openDate").attr("value"));
  }

  if ($("#event_search_form_date").attr("value") !== false) {
    $("#event_search_form_date").datepicker().datepicker("setDate", $("#event_search_form_date").attr("value"));
  }
});


/*Кастомный селект*/

$(document).ready(function() {
  /*$('.select').on('changed', function(){
    value = this.value;
    console.log(value);
  });*/


  $('.select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select');
    $this.wrap('<div class="select-custom"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        html: '<span>' + $this.children('option').eq(i).text() + '</span>',
        rel: $this.children('option').eq(i).val(),
        title: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.html('<span class="select-value">' + $(this).text() + '</span>').removeClass('active');
      $styledSelect.attr('rel', $(this).attr('rel'));
      $styledSelect.attr('title', $(this).attr('title'));
      $this.val($(this).attr('rel'));
      $this.val($(this).attr('title'));
      $list.hide();
      $this.trigger('changed');
    });

    $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
    });

    $('.search__form button[type="reset"]').click(function(){
      $styledSelect.html('<span>' +$this.children('option').eq(0).text() + '</span>');
      $styledSelect.removeAttr('rel');
      $styledSelect.removeAttr('title');
      for (var j = 0; j < numberOfOptions; j++) {
        $this.children('option').eq(j).removeAttr('selected')
      }
    });

    for (var j = 0; j < numberOfOptions; j++) {
      if ($this.children('option').eq(j).attr('selected')) {
        $styledSelect.html('<span>' +$this.children('option').eq(j).text() + '</span>');
        $styledSelect.attr('rel', $this.children('option').eq(j).val());
        $styledSelect.attr('title', $this.children('option').eq(j).val());
      }
    }
  });
});

/*Раскрытие настроек показа столбцов*/

$(document).ready(function() {
  $('.search__show').click(function(){
    $(this).parent().prev().addClass('active')
  });
  $('.search__hide').click(function(){
    $(this).parent().parent().removeClass('active')
  });
});

/*Раскрытие в память о герое*/

$(document).ready(function() {
  $('.article__link').click(function(){
    if ($(this).parent().hasClass("active")) {
      $(this).text("Показать подробнее");
      $(this).parent().removeClass("active");
      var top = $(this).parent().offset().top - 60;
      $('body,html').animate({scrollTop: top}, 2000);
      console.log(top)
    } else {
      $(this).text("Скрыть текст");
      $(this).parent().addClass("active");
    }
  });
});

/*Раскрытие описания*/

$(document).ready(function() {
  $('.underintro__description-more').click(function(){
    if ($(this).parent().hasClass("active")) {
      $(this).text("Показать подробнее");
      $(this).parent().removeClass("active");
      var top = $(this).parent().offset().top - 60;
      $('body,html').animate({scrollTop: top}, 2000);
      console.log(top)
    } else {
      $(this).text("Скрыть текст");
      $(this).parent().addClass("active");
    }
  });
});

$(document).ready(function() {
  $('.underintro__text-more').click(function(){
    if ($(this).parent().hasClass("active")) {
      $(this).text("Показать подробнее");
      $(this).parent().removeClass("active");
      var top = $(this).parent().offset().top - 60;
      $('body,html').animate({scrollTop: top}, 2000);
      console.log(top)
    } else {
      $(this).text("Скрыть текст");
      $(this).parent().addClass("active");
    }
  });
});

/*Lightbox*/

$(document).ready(function() {
  /*baguetteBox.run('.photo-person__wrap');
  baguetteBox.run('.underintro__slider');*/
});

/*Модальные окна*/

/*function openPopup(e) {
  $('#'+ e).addClass('show');
  $('body').addClass('ov-hid');
}
function closePopup(e) {
  $('#'+ e).removeClass('show');
  $('body').removeClass('ov-hid');
}*/

$(document).ready(function() {
  $('.footer .btn').click(function(){
    $('#addHero').addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.footer__feedback').click(function(){
    $('#feedback').addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup-close').click(function(){
    $(this).parent().parent().removeClass('show');
    $('body').removeClass('ov-hid');
  });
});

$(document).mouseup(function (e){
  var el = $(".popup__wrapper");
  if (!el.is(e.target) && el.has(e.target).length === 0) {
    el.parent(e).removeClass('show');
    $('body').removeClass('ov-hid');
  }
});

/*Dropzone*/

Dropzone.autoDiscover = false;

$(document).ready(function() {

  $("#photoDropzone").dropzone({
    url: "/file/post",
    autoProcessQueue: false,
    uploadMultiple: true,
    addRemoveLinks: true,
    maxFilesize: 3,
    parallelUploads: 20,
    maxFiles: 20,
    acceptedFiles: ".png, .jpg, .jpeg",
    dictRemoveFile: "Удалить",
    init: function() {
      this.on("error", function(file){
        $(file.previewElement).remove();
        this.removeFile(file);
      });
      this.on("maxfilesexceeded", function(file) {
        this.removeAllFiles();
        this.addFile(file);
      });
    },
  });

});

/*Input type file*/

$(document).ready(function() {

  (function() {

    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
      isIE = /msie/i.test( navigator.userAgent );

    $.fn.customFile = function() {

      return this.each(function() {

        var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
          $wrap = $('<div class="file-upload-wrapper">'),
          $input = $('<div class="file-upload-input"></div>'),
          // Button that will be used in non-IE browsers
          $button = $('<button type="button" class="btn btn-gold file-upload-button">Добавить фото</button>'),
          // Hack for IE
          $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Добавить фото</label>');

        // Hide by shifting to the left so we
        // can still trigger events
        $file.css({
          position: 'absolute'
        });

        $wrap.insertAfter( $file )
          .append( $file, $input, ( isIE ? $label : $button ) );

        // Prevent focus
        $file.attr('tabIndex', -1);
        $button.attr('tabIndex', -1);

        $button.click(function () {
          $file.focus().click(); // Open dialog
        });

        $file.change(function() {

          var files = [], fileArr, filename;

          // If multiple is supported then extract
          // all filenames from the file array
          if ( multipleSupport ) {
            fileArr = $file[0].files;
            for ( var i = 0, len = fileArr.length; i < len; i++ ) {
              files.push( fileArr[i].name );
            }
            filename = files.join(', ');

            // If not supported then just take the value
            // and remove the path to just show the filename
          } else {
            filename = $file.val().split('\\').pop();
          }

          $input.text( filename ) // Set the value
            .attr('title', filename) // Show filename in title tootlip
            .focus(); // Regain focus

        });

        $input.on({
          blur: function() { $file.trigger('blur'); },
          keydown: function( e ) {
            if ( e.which === 13 ) { // Enter
              if ( !isIE ) { $file.trigger('click'); }
            } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
              // On some browsers the value is read-only
              // with this trick we remove the old input and add
              // a clean clone with all the original events attached
              $file.replaceWith( $file = $file.clone( true ) );
              $file.trigger('change');
              $input.val('');
            } else if ( e.which === 9 ){ // TAB
              return;
            } else { // All other keys
              return false;
            }
          }
        });

      });

    };

    // Old browser fallback
    if ( !multipleSupport ) {
      $( document ).on('change', 'input.customfile', function() {

        var $this = $(this),
          // Create a unique ID so we
          // can attach the label to the input
          uniqId = 'customfile_'+ (new Date()).getTime(),
          $wrap = $this.parent(),

          // Filter empty input
          $inputs = $wrap.siblings().find('.file-upload-input')
            .filter(function(){ return !this.value }),

          $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

        // 1ms timeout so it runs after all other events
        // that modify the value have triggered
        setTimeout(function() {
          // Add a new input
          if ( $this.val() ) {
            // Check for empty fields to prevent
            // creating new inputs when changing files
            if ( !$inputs.length ) {
              $wrap.after( $file );
              $file.customFile();
            }
            // Remove and reorganize inputs
          } else {
            $inputs.parent().remove();
            // Move the input so it's always last on the list
            $wrap.appendTo( $wrap.parent() );
            $wrap.find('input').focus();
          }
        }, 1);

      });
    }

  }());

  $('input[type=file]').customFile();

});

$(document).ready(function() {

  $('.input').on('keydown', function(event){
      /*alert('123')*/
  })

});

/*Маска номера телефона*/

$(function(){
  if($('input').is('.phone')){
    $(".phone").mask("+7 (999) 999-99-99");
  }
});


/*Карта на детальной странице*/

$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYXZlcm5lIiwiYSI6ImNqdHRzZGlkajA3YmE0NHF5aWR5bzM0MDMifQ.RIrCtXnxBaev-IbOSLqn4g';
  var mapDetail = new mapboxgl.Map({
    container: 'map-detail', // container id
    style: 'mapbox://styles/romaverne/cknzx345m0ms617kdkhu5kckc',
    center: [32.0301, 54.4926], // starting position
    zoom: 10 // starting zoom
  });

  /*Данные для точки на карте*/
  mapDetail.on('load', function () {
    mapDetail.addSource('places', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {
              'name': 'circle-01',
              'description':
                '<div class="tooltip-event__img">\n' +
  '                <img src="./img/e-photo-01.jpg" alt="">\n' +
  '              </div>\n' +
  '              <div class="tooltip-event__info">\n' +
  '                <div class="tooltip-event__date">10 апреля 2010 года</div>\n' +
  '                <div class="tooltip-event__caption">Авиакатастрофа Смоленск</div>\n' +
  '                <div class="tooltip-event__description">Погибли все находившиеся на его борту 96 человек — 88 пассажиров и 8 членов экипажа в их числе президент Польши Лех Качиньский и его жена Мария Качиньская.</div>\n' +
  '              </div>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [32.0301, 54.4926]
            },
          }
        ]
      }
    });

    /*Стилизация маркера*/
    mapDetail.addLayer({
      'id': 'places',
      'type': 'circle',
      'source': 'places',
      'paint': {
        'circle-color': '#fff',
        'circle-radius': 8,
        'circle-stroke-width': 8,
        'circle-stroke-color': '#E1C989',
      }
    });

    /*Стилизация маркера при ховере*/
    mapDetail.addLayer({
      'id': 'places-hover',
      'type': 'circle',
      'source': 'places',
      'paint': {
        'circle-color': '#fff',
        'circle-radius': 8,
        'circle-stroke-width': 8,
        'circle-stroke-color': '#1A5D99',
      },
      "filter": ["==", "name", ""]
    });

    /*Добавили кнопки для зума*/
    var nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });

    mapDetail.addControl(nav, "top-right");

    /*Добавили popup*/
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    mapDetail.on('mouseenter', 'places', function (e) {

      mapDetail.getCanvas().style.cursor = 'pointer';

      mapDetail.setFilter("places-hover", ["==", "name", e.features[0].properties.name]);

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates).setHTML(description).addTo(mapDetail);
    });

    mapDetail.on('mouseleave', 'places', function () {
      mapDetail.getCanvas().style.cursor = '';
      mapDetail.setFilter("places-hover", ["==", "name", ""]);
      popup.remove();
    });
  });
})

/*Карта на главной странице + timeline*/

$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYXZlcm5lIiwiYSI6ImNqdHRzZGlkajA3YmE0NHF5aWR5bzM0MDMifQ.RIrCtXnxBaev-IbOSLqn4g';
  var mapAll = new mapboxgl.Map({
    container: 'map-all', // container id
    style: 'mapbox://styles/romaverne/cknzx345m0ms617kdkhu5kckc',
    /*center: [43.1103, 44.3227],*/ // starting position
    zoom: 10 // starting zoom
  });

  /*Данные для точек на карте*/
  mapAll.on('load', function () {
    mapAll.addSource('places', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {
              'name': 'circle-01',
              'description':
                '<div class="tooltip-event__img">\n' +
                '  <img src="./img/e-photo-01.jpg" alt="">\n' +
                '</div>\n' +
                '<div class="tooltip-event__info">\n' +
                '  <div class="tooltip-event__date">1-3 сентября 2004 года</div>\n' +
                '  <div class="tooltip-event__caption">Террористический акт в Беслане</div>\n' +
                '  <div class="tooltip-event__description">Во время захвата школы №1, погибло 333 человека, среди них 2 спасателя МЧС России, 1 сотрудник МВД, 6 гражданских спасателей и 10 сотрудников ЦСН ФСБ</div>\n' +
                '</div>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.1103, 44.3227]
            },
          },
          {
            'type': 'Feature',
            'properties': {
              'name': 'circle-02',
              'description':
                '<div class="tooltip-event__img">\n' +
                '  <img src="./img/e-photo-01.jpg" alt="">\n' +
                '</div>\n' +
                '<div class="tooltip-event__info">\n' +
                '  <div class="tooltip-event__date">10 апреля 2010 года</div>\n' +
                '  <div class="tooltip-event__caption">Авиакатастрофа Смоленск</div>\n' +
                '  <div class="tooltip-event__description">Погибли все находившиеся на его борту 96 человек — 88 пассажиров и 8 членов экипажа в их числе президент Польши Лех Качиньский и его жена Мария Качиньская.</div>\n' +
                '</div>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [32.0301, 54.4926]
            },
          }
        ]
      }
    });

    /*Стилизация маркера*/
    mapAll.addLayer({
      'id': 'places',
      'type': 'circle',
      'source': 'places',
      'paint': {
        'circle-color': '#fff',
        'circle-radius': 8,
        'circle-stroke-width': 8,
        'circle-stroke-color': '#E1C989',
      }
    });

    /*Стилизация маркера при ховере*/
    mapAll.addLayer({
      'id': 'places-hover',
      'type': 'circle',
      'source': 'places',
      'paint': {
        'circle-color': '#fff',
        'circle-radius': 8,
        'circle-stroke-width': 8,
        'circle-stroke-color': '#1A5D99',
      },
      "filter": ["==", "name", ""]
    });

    /*Добавление кнопок зума*/
    var nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });

    mapAll.addControl(nav, "top-right");

    /*Добавление popup*/
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    mapAll.on('mouseenter', 'places', function (e) {

      mapAll.getCanvas().style.cursor = 'pointer';

      mapAll.setFilter("places-hover", ["==", "name", e.features[0].properties.name]);

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates).setHTML(description).addTo(mapAll);
    });

    mapAll.on('mouseleave', 'places', function () {
      mapAll.getCanvas().style.cursor = '';
      mapAll.setFilter("places-hover", ["==", "name", ""]);
      popup.remove();
    });
  });

  /*Массив событий для timeline*/
  var events = [
    {
      name: 'Наводнение в Свердловской области',
      date: '14/06/1993',
      image: '/img/events-detail-01.jpg',
      dateText: '14 июня 1993 года',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coordinates: [43.1103, 44.3227],
    },
    {
      name: 'Прорыв плотины в Башкирии',
      date: '07/08/1994',
      image: '/img/events-detail-01.jpg',
      dateText: '7 августа 1994 года',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coordinates: [45.1103, 46.3227],
    },
    {
      name: 'Землятресение на Сахалине',
      date: '28/05/1995',
      image: '/img/events-detail-01.jpg',
      dateText: '28 мая 1995 года',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coordinates: [47.1103, 48.3227],
    },
    {
      name: 'Подъем воды в г. Ленск',
      date: '19/05/1998',
      image: '/img/events-detail-01.jpg',
      dateText: '19 мая 1998 года',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coordinates: [49.1103, 50.3227],
    },
    {
      name: 'Массовые теракты в России',
      date: '04/09/1999',
      image: '/img/events-detail-01.jpg',
      dateText: '4 сентября 1999 года',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coordinates: [51.1103, 52.3227],
    },
  ];

  /*Вывод точек на timeline*/
  function makeCircles() {
    if (events.length < 2) {
      $(".timeline__line").hide();
    } else if (events.length >= 2) {

      /*Преобразование даты из строки в дату*/
      function stringToDate(_date,_format,_delimiter) {
        var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
      }

      /*Сортировка событий в хронологическом порядке*/
      events.sort(function(a,b){
        return stringToDate(a.date,"dd/MM/yyyy","/") - stringToDate(b.date,"dd/MM/yyyy","/");
      });

      /*Определяем максимальное и минимальное значение дат*/
      var first = events[0].date;
      var last = events[events.length - 1].date

      var firstDay = 1;
      var firstMonth = 1;
      var firstYear = parseInt(first.split('/')[2]);

      var lastDay = 31;
      var lastMonth = 12;
      var lastYear = parseInt(last.split('/')[2]);

      var lastInt = ((lastYear + 1 - firstYear) * 365)/* + ((lastMonth - firstMonth) * 30) + (lastDay - firstDay)*/;

      var years = []

      for (var i = 0; i <= (lastYear - firstYear) + 1; i++) {
        let year = firstYear + i
        years.push(year)
        year++
      }

      /*Вывод засечек с годами*/
      for (var j = 0; j < years.length; j++) {
        var textDay = 1;
        var textMonth = 1;
        var textYear = years[j];

        var textInt = ((textYear - firstYear) * 365) + ((textMonth - textMonth) * 30) + (textDay - textDay);

        var relativeTextInt = textInt / lastInt;

        $(".timeline__line-year").append('<div class="year-circle" style="left: ' + relativeTextInt * 100 + '%;"><div class="year-text">' + textYear + '</div></div>');
      }

      /*Вывод засечек с месяцами*/
      for (var k = 0; k < years.length - 1; k++) {
        var textDay = 1;
        var textYear = years[k];

        for (var l = 1; l <= 12 ; l++) {
          var textMonth2 = l

          var textInt = ((textYear - firstYear) * 365) + ((textMonth2 - textMonth) * 30) + (textDay - textDay);

          var relativeTextInt = textInt / lastInt;

          $(".timeline__line-month").append('<div class="month-circle" style="left: ' + relativeTextInt * 100 + '%;"></div>');
        }
      }

      /*Вывод точек с событиями*/
      for (var m = 0; m < events.length; m++) {
        var thisDay = parseInt(events[m].date.split('/')[0]);
        var thisMonth = parseInt(events[m].date.split('/')[1]);
        var thisYear = parseInt(events[m].date.split('/')[2]);

        var thisInt = ((thisYear - firstYear) * 365) + ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

        var relativeInt = thisInt / lastInt;

        var tooltipClass = relativeInt < 0.2 ? 't-left' : relativeInt > 0.8 ? 't-right' : '';

        $(".timeline__line-events").append('' +
          '<div class="events-circle" style="left: ' + relativeInt * 100 + '%;" data-coordinates="' + events[m].coordinates + '">' +
          '  <div class="events-text">' + events[m].name + '</div>' +
          '  <div class="tooltip tooltip-event ' + tooltipClass  + '">\n' +
          '    <div class="tooltip-event__img">\n' +
          '      <img src="' + events[m].image + '" alt="">\n' +
          '    </div>\n' +
          '    <div class="tooltip-event__info">\n' +
          '      <div class="tooltip-event__date">' + events[m].dateText + '</div>\n' +
          '      <div class="tooltip-event__caption">' + events[m].name + '</div>\n' +
          '      <div class="tooltip-event__description">' + events[m].description + '</div>\n' +
          '    </div>\n' +
          '  </div>' +
          '</div>' +
          '');
      }
    }

    /*Делаем активным первое событие в timeline*/
    $(".events-circle:first").addClass("active");

    /*Берем координаты у активного события и переносим карту на эти координаты*/
    if ($(".events-circle.active").hasClass("active")) {
      let coordinates = $(".events-circle.active").attr("data-coordinates");
      let lng = coordinates.split(',')[0];
      let lat = coordinates.split(',')[1];

      mapAll.jumpTo({center: [lng, lat]});
    }
  }

  makeCircles();

  /*При клике на другие события меняем класс и координаты на карте*/
  $(".events-circle").click(function() {
    $(".events-circle").removeClass('active');
    $(this).addClass('active');

    if ($(".events-circle.active").hasClass("active")) {
      let coordinates = $(".events-circle.active").attr("data-coordinates");
      let lng = coordinates.split(',')[0];
      let lat = coordinates.split(',')[1];

      mapAll.flyTo({center: [lng, lat], speed: 0.5,});
    }
  });

  /*Добавляем скролл вправо и влево на мобиле и планшете*/
  let elem = document.querySelector('.timeline__wrapper');
  let pr = document.querySelector('.timeline-prev');
  let nx = document.querySelector('.timeline-next');

  let screenWidth =  window.innerWidth;
  let maxScrl = elem.scrollWidth - screenWidth;

  window.addEventListener("resize", function() {
    screenWidth =  window.innerWidth;
    maxScrl = elem.scrollWidth - screenWidth;
    scroll();
  });

  elem.addEventListener('scroll', scroll);

  pr.setAttribute("disabled", "disabled");

  function scroll() {
    if ((elem.scrollLeft === 0) && elem.scrollWidth > screenWidth) {
      pr.setAttribute("disabled", "disabled");
      nx.removeAttribute("disabled");
    } else if ((elem.scrollLeft >= maxScrl && elem.scrollWidth > screenWidth) || ((maxScrl < 0) && (elem.scrollWidth < screenWidth))) {
      nx.setAttribute("disabled", "disabled");
    } else {
      pr.removeAttribute("disabled");
      nx.removeAttribute("disabled");
    }
  }

  $('.timeline-next').click(function() {
    event.preventDefault();
    $('.timeline__wrapper').animate({
      scrollLeft: "+=100px"
    }, "slow");
  });

  $('.timeline-prev').click(function() {
    event.preventDefault();
    $('.timeline__wrapper').animate({
      scrollLeft: "-=100px"
    }, "slow");
  });

})

