/*global
  jQuery: false,
  window: false
  */
/*jshint
  bitwise: true,
  browser: true,
  eqeqeq: true,
  indent: 2,
  newcap: true,
  nomen: true,
  regexp: true,
  undef: true,
  white: true
  */
jQuery(function ($) {
  $(document).ready(function () {
    var console;
    if (window.console) {
      console = window.console;
    }
    else if (window.alert) {
      console = window.alert;
    }
    else {
      console = function () {};
    }
    
    $('#buttonDefault').ninja().create('button', {
      onCreate: function () {
        console.log('Ninja ui: Created button #' + this.id + '.');
      },
      onDeselect: function () {
        console.log('Ninja ui: Deselected button #' + this.id + '.');
      },
      onSelect: function () {
        console.log('Ninja ui: Selected button #' + this.id + '.');
      },
      title: 'Default'
    });

    $('#buttonIcon').ninja().create('button', {
      icon: 'target',
      title: 'Icon'
    });

    $('#buttonSelected').ninja().create('button', {
      isSelected: true,
      title: 'Selected'
    });

    $('#buttonDisabled').ninja().create('button', {
      onDisable: function () {
        $('#buttonDisabled').text('Disabled');
      },
      onEnable: function () {
        $('#buttonDisabled').text('Enabled');
      },
      isEnabled: false,
      title: 'Disabled'
    });

    $('#buttonToggleSelected').toggle(function () {
      $('#buttonSelected').ninja().deselect();
    }, function () {
      $('#buttonSelected').ninja().select();
    });

    $('#buttonToggleDisabled').toggle(function () {
      $('#buttonDisabled').ninja().enable();
    }, function () {
      $('#buttonDisabled').ninja().disable();
    });

    $('#buttonSubmit').ninja().create('button', { title: 'Submit' });

    $('#drawerDefault').ninja().create('drawer', {
      title: 'Default',
      width: '50%'
    });

    $('#drawerSelected').ninja().create('drawer', {
      isSelected: true,
      title: 'Selected',
      width: '50%'
    });

    $('#drawerToggle').click(function () {
      if ($('#drawerDefault').data().options.isSelected) {
        $('#drawerDefault').ninja().deselect();
      }
      else {
        $('#drawerDefault').ninja().select();
      }
    });
    
    $.each(['add', 'arrange', 'beverage', 'bookmark', 'caution', 'check', 'down', 'download', 'edit', 'flag', 'food', 'gear', 'group', 'heart', 'home', 'in', 'left', 'lock', 'mail', 'no', 'out', 'phone', 'photo', 'print', 'profile', 'question', 'refresh', 'remove', 'right', 'search', 'star', 'target', 'unlock', 'up', 'upload', 'video'], function (i, icon) {
      $('#icon').append($('<span/>').ninja().create('icon', { icon: icon }), ' ');
    });

    $('#menu').ninja().create('menu', {
      icon: 'profile',
      onSelect: function () {
        if (this.value === 'Barrack Obama') {
          window.alert('Barrack Obama is correct!');
        }
        else {
          window.alert(this.value + ' is not correct, please try again.');
        }
      },
      title: 'The President?',
      values: ['Barrack Obama', 'George Bush Jr.', 'Bill Clinton', 'George Bush Sr.', 'Ronald Reagan', 'Jimmy Carter']
    });

    $('#panel').ninja().create('panel', {
      icon: 'caution',
      title: 'Default'
    });
    
    $('#ratingDefault').ninja().create('rating', {
      colors: {
        selected: { backgroundColor: 'gold' }
      },
      onSelect: function () {
        console.log('Ninja ui: Rating changed to ' + this.selected);
      },
      values: [1, 2, 3, 4, 5]
    });

    $('#ratingSelectedGroup').ninja().create('rating', {
      colors: {
        selected: { backgroundColor: 'gold' },
        selectedGroup: { backgroundColor: 'red' }
      },
      onSelect: function () {
        console.log('Ninja ui: Rating changed to ' + this.selected);
      },
      selectedGroup: 4,
      values: [1, 2, 3, 4, 5]
    });

    $('#ratingSelected').ninja().create('rating', {
      colors: {
        selected: { backgroundColor: 'gold' }
      },
      onSelect: function () {
        console.log('Ninja ui: Rating changed to ' + this.selected);
      },
      selected: 4,
      values: [1, 2, 3, 4, 5]
    });

    $('#slider').ninja().create('slider', {
      names: ['0 dB', '10 dB (Light leaf rustling, calm breathing)', '20-30 dB (Very calm room)', '40-60 dB (Normal conversation at 1 m)', '60 dB (TV set at home level at 1 m)', '60-80 dB (Passenger car at 10 m)', '78 dB (Hearing damage over long-term exposure, need not be continuous)', '80-90 dB (Traffic on a busy roadway at 10 m)', '100 dB (Jack hammer at 1 m)', '120 dB (Hearing damage immediately possible)', '130 dB (Threshold of pain)', '150 dB (Jet engine at 30 m)', '168 dB (M1 Garand rifle being fired at 1 m)'],
      onSelect: function () {
        console.log('Ninja ui: Slider changed to value:' + this.value + ', name:' + this.name + '.');
        if ($(this).val() === '168') {
          $('#sliderSelect').unbind('click').click(function (event) {
            event.preventDefault();
          }).css({ color: 'black', cursor: 'default', textDecoration: 'none' });
        }
        else {
          $('#sliderSelect').unbind('click').click(function () {
            $('#slider').ninja().select({ value: '168' });
          }).css({ color: 'blue', cursor: 'pointer', textDecoration: 'underline' });
        }
      },
      title: 'Volume',
      value: '40-60',
      values: ['0', '10-10', '20-30', '40-60', '60', '60-80', '78', '80-90', '100', '120', '130', '150', '168'],
      width: 400
    });

    $('#sliderSelect').click(function () {
      $('#slider').ninja().select({ value: '168' });
    }).css({ color: 'blue' });
    
    $('#suggest').ninja().create('suggest', {
      icon: 'search',
      title: 'Recipes',
      onUpdate: function () {
        if ($.inArray(this.value, ['a', 'ac', 'aco', 'acor', 'acorn', 'ap', 'app', 'appl', 'apple', 'av', 'avo', 'avoc', 'avoca', 'avocad', 'avocado']) > -1) {
          $(this.list).ninja().update({ values: ['acorn', 'apple', 'avocado'] });
        }
        else {
          $(this.list).ninja().update({ values: ['icecream', 'cake', 'pie'] });
        }
      },
      onSelect: function () {
        console.log('Ninja ui: Suggest selected with value: ' + this.value);
      },
      values: ['one', 'two', 'three'],
      width: '50%'
    });

    $('#suggestSelect').click(function () {
      $('#suggest').ninja().select();
    });

    $('#waitSlider').toggle(function () {
      $('#slider').ninja().wait({
        message: 'Click Wait/Resume link again to resume.'
      });
    }, function () {
      $('#slider').ninja().resume();
    });

    $('#waitBody').toggle(function () {
      $(document.body).ninja().wait({
        message: 'Click Wait/Resume link again to resume.'
      });
    }, function () {
      $(document.body).ninja().resume();
    });

  });
});
