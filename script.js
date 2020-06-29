// Year in the footer

const year = document.querySelector('#year');

year.innerHTML = " " + new Date().getFullYear() + " ";


// Verify Modal
const verifyFunc = () => {
  const verify = document.querySelector('.verify-container');
  const modalOn = () => {
    verify.classList.remove('verify-hidden');
  };

  if (sessionStorage.getItem('key') === null) {
    window.onload = () => {
      setTimeout(modalOn, 2000);
    };

    const verifyBtn = document.querySelector('.verify-btn');

    verifyBtn.addEventListener('click', () => {
      verify.classList.add('verify-hidden');
      sessionStorage.setItem('key', 'verified');
    });

  } else {
    verify.classList.add('verify-hidden');
  }

}

verifyFunc();


// Hamburger Menu

const hamburger = document.getElementById('ham');
const hamgroup = document.getElementById('hamgroup');
const x = document.getElementById('x1');
const servHover = document.getElementById('service-button');
const serviceDrop = document.getElementById('service-drop');
const serviceMenu = document.getElementById('service-drop');
const arrow = document.getElementById('arrow');
const upArrow = document.getElementById('up-arrow');



hamburger.onclick = function () {
  hamgroup.style.display = "block";
  hamburger.style.display = "none";
  x.style.display = "block";
}


x.onclick = function () {
  hamgroup.style.display = "none";
  x.style.display = "none";
  hamburger.style.display = "block";

}

// Service Menu
const serviceHam = document.getElementById('service-button-ham');
const hamDrop = document.getElementById('ham-service-drop');
const hamArrow = document.getElementById('ham-arrow');
const hamUp = document.getElementById('ham-up-arrow');
const serviceBack = document.querySelector('.service-on');

servHover.onclick = function () {
  if (serviceDrop.style.display === "none") {
    serviceDrop.style.display = "block";
    upArrow.style.display = "";
    arrow.style.display = "none";
    serviceBack.classList.remove('display-none');
  }

  else if (serviceDrop.style.display === "block") {
    serviceDrop.style.display = "none";
    upArrow.style.display = "none";
    arrow.style.display = "";
    serviceBack.classList.add('display-none');
  }

}

serviceHam.addEventListener('click', function () {
  hamDrop
})

serviceBack.onclick = function () {
  serviceDrop.style.display = "none";
  upArrow.style.display = "none";
  arrow.style.display = "";
  serviceBack.classList.add('display-none');
}

// serviceBack.onclick = function () {
//   serviceBack.classList.add('display-none');
// }

// // serviceBack.addEventListener('click', function () {
//   serviceBack.classList.add('display-none');
// // })



serviceHam.onclick = function () {
  if (hamDrop.style.display === "none") {
    hamDrop.style.display = "block";
    hamUp.style.display = "";
    hamArrow.style.display = "none";
  }

  else if (hamDrop.style.display === "block") {
    hamDrop.style.display = "none";
    hamUp.style.display = "none";
    hamArrow.style.display = "";

  }

  hamDrop.classList.toggle('do-show')
}





// Contact form
const form = document.querySelector('#contact-form');
const emailBtn = document.querySelector('.contact-serv');
form.addEventListener('submit', function () {
  e.preventDefault();
  emailBtn.remove();
  const thanks = document.createElement('p');
  thanks.innerHTML = 'Thanks for the message!';
  thanks.classList.add('thanks');
  form.appendChild(thanks);
  window.location.href = './contact.html';

});

const service = document.querySelector('#service');

// if (service.value == 'White-Label') {
//   console.log('success! white label')
// }

const whiteLabel = document.querySelector('.white-label-form');

service.addEventListener('change', function (e) {
  const whiteBrand = document.querySelector('#whitebrand');
  const whiteLabelMain = document.querySelector('#whitelabel-2')
  const whiteLabelYes = document.querySelector('#whitelabel-brand');
  const whiteLabelNo = document.querySelector('#whitelabel-nobrand');
  const bulkForm = document.querySelector('.bulk-form');
  // const distroForm = document.querySelector('.distro-form');
  // const distroSelect = document.querySelector('#distro-select');
  // const distroBrandYes = document.querySelector('#distro-brand');
  // const distroBrandNo = document.querySelector('#distro-nobrand');
  const consultForm = document.querySelector('.consult-form');
  if (e.target.value === "White-Label-Contract-Manu") {
    whiteLabelMain.classList.remove('no-show')
    // distroForm.classList.add('no-show')
    bulkForm.classList.toggle('no-show');
    consultForm.classList.add('no-show');
    whiteBrand.addEventListener('change', function (e) {
      if (e.target.value === "I have a brand") {
        whiteLabelYes.classList.remove('no-show');
        whiteLabelNo.classList.add('no-show');
        bulkForm.classList.add('no-show');
        // distroForm.classList.add('no-show')

      } else if (e.target.value === "I am introducing a new brand") {
        whiteLabelNo.classList.remove('no-show');
        whiteLabelYes.classList.add('no-show');
        bulkForm.classList.add('no-show');
        // distroForm.classList.add('no-show')
      }
    })
  } else if (e.target.value === "Bulk-Oil") {
    whiteLabelNo.classList.add('no-show');
    whiteLabelYes.classList.add('no-show');
    whiteLabelMain.classList.add('no-show');
    bulkForm.classList.remove('no-show');
    whiteLabel.classList.add('no-show')
    // distroForm.classList.add('no-show')
    consultForm.classList.add('no-show')

  // } else if (e.target.value === "Distribution") {
  //   whiteLabelNo.classList.add('no-show');
  //   whiteLabelYes.classList.add('no-show');
  //   bulkForm.classList.add('no-show');
  //   whiteLabel.classList.add('no-show')
  //   distroForm.classList.remove('no-show')
  //   consultForm.classList.add('no-show')

  //   distroSelect.addEventListener('change', function (e) {
  //     if (e.target.value === "Our Brand Already Exists") {
  //       distroBrandYes.classList.remove('no-show');
  //       distroBrandNo.classList.add('no-show');
  //     } else if (e.target.value === "We Are A New Brand") {
  //       distroBrandNo.classList.remove('no-show');
  //       distroBrandYes.classList.add('no-show');

  //     }
  //   })
  } else if (e.target.value === "Consulting-Compliance") {
    whiteLabelNo.classList.add('no-show');
    whiteLabelYes.classList.add('no-show');
    bulkForm.classList.add('no-show');
    whiteLabel.classList.add('no-show')
    whiteLabelMain.classList.add('no-show');
    // distroForm.classList.add('no-show')
    consultForm.classList.remove('no-show')
  } else {
    whiteLabelNo.classList.add('no-show');
    whiteLabelYes.classList.add('no-show');
    bulkForm.classList.add('no-show');
    whiteLabel.classList.add('no-show')
    // distroForm.classList.add('no-show')
    consultForm.classList.add('no-show');
    whiteLabelMain.classList.add('no-show');
  }


})































// Active campaign form


window.cfields = [];
window._show_thank_you = function (id, message, trackcmp_url) {
  const form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
  form.querySelector('._form-content').style.display = 'none';
  thank_you.innerHTML = message;
  thank_you.style.display = 'block';
  if (typeof (trackcmp_url) != 'undefined' && trackcmp_url) {
    // Site tracking URL to use after inline form submission.
    _load_script(trackcmp_url);
  }
  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function (id, message, html) {
  var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
  if (old_error) old_error.parentNode.removeChild(old_error);
  err.innerHTML = message;
  err.className = '_error-inner _form_error _no_arrow';
  var wrapper = document.createElement('div');
  wrapper.className = '_form-inner';
  wrapper.appendChild(err);
  button.parentNode.insertBefore(wrapper, button);
  document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
  if (html) {
    var div = document.createElement('div');
    div.className = '_error-html';
    div.innerHTML = html;
    err.appendChild(div);
  }
};
window._load_script = function (url, callback) {
  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src = url;
  if (callback) {
    script.onload = script.onreadystatechange = function () {
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
      }
    };
  }
  head.appendChild(script);
};
(function () {
  if (window.location.search.search("excludeform") !== -1) return false;
  var getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  var setCookie = function (name, value) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 24 * 365;
    now.setTime(expireTime);
    document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
  }
  var addEvent = function (element, event, func) {
    if (element.addEventListener) {
      element.addEventListener(event, func);
    } else {
      var oldFunc = element['on' + event];
      element['on' + event] = function () {
        oldFunc.apply(this, arguments);
        func.apply(this, arguments);
      };
    }
  }
  var _removed = false;
  var form_to_submit = document.getElementById('_form_1_');
  var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

  var getUrlParam = function (name) {
    var regexStr = '[\?&]' + name + '=([^&#]*)';
    var results = new RegExp(regexStr, 'i').exec(window.location.href);
    return results != undefined ? decodeURIComponent(results[1]) : false;
  };

  for (var i = 0; i < allInputs.length; i++) {
    var regexStr = "field\\[(\\d+)\\]";
    var results = new RegExp(regexStr).exec(allInputs[i].name);
    if (results != undefined) {
      allInputs[i].dataset.name = window.cfields[results[1]];
    } else {
      allInputs[i].dataset.name = allInputs[i].name;
    }
    var fieldVal = getUrlParam(allInputs[i].dataset.name);

    if (fieldVal) {
      if (allInputs[i].dataset.autofill === "false") {
        continue;
      }
      if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
        if (allInputs[i].value == fieldVal) {
          allInputs[i].checked = true;
        }
      } else {
        allInputs[i].value = fieldVal;
      }
    }
  }

  var remove_tooltips = function () {
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
    }
    tooltips = [];
  };
  var remove_tooltip = function (elem) {
    for (var i = 0; i < tooltips.length; i++) {
      if (tooltips[i].elem === elem) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        tooltips.splice(i, 1);
        return;
      }
    }
  };
  var create_tooltip = function (elem, text) {
    var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
    if (elem.type != 'radio' && elem.type != 'checkbox') {
      tooltip.className = '_error';
      arrow.className = '_error-arrow';
      inner.className = '_error-inner';
      inner.innerHTML = text;
      tooltip.appendChild(arrow);
      tooltip.appendChild(inner);
      elem.parentNode.appendChild(tooltip);
    } else {
      tooltip.className = '_error-inner _no_arrow';
      tooltip.innerHTML = text;
      elem.parentNode.insertBefore(tooltip, elem);
      new_tooltip.no_arrow = true;
    }
    new_tooltip.tip = tooltip;
    new_tooltip.elem = elem;
    tooltips.push(new_tooltip);
    return new_tooltip;
  };
  var resize_tooltip = function (tooltip) {
    var rect = tooltip.elem.getBoundingClientRect();
    var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));
    if (scrollPosition < 40) {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
    } else {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
    }
  };
  var resize_tooltips = function () {
    if (_removed) return;
    for (var i = 0; i < tooltips.length; i++) {
      if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
    }
  };
  var validate_field = function (elem, remove) {
    var tooltip = null, value = elem.value, no_error = true;
    remove ? remove_tooltip(elem) : false;
    if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
    if (elem.getAttribute('required') !== null) {
      if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
        var elems = form_to_submit.elements[elem.name];
        if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
          no_error = elem.checked;
        }
        else {
          no_error = false;
          for (var i = 0; i < elems.length; i++) {
            if (elems[i].checked) no_error = true;
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, "Please select an option.");
        }
      } else if (elem.type == 'checkbox') {
        var elems = form_to_submit.elements[elem.name], found = false, err = [];
        no_error = true;
        for (var i = 0; i < elems.length; i++) {
          if (elems[i].getAttribute('required') === null) continue;
          if (!found && elems[i] !== elem) return true;
          found = true;
          elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
          if (!elems[i].checked) {
            no_error = false;
            elems[i].className = elems[i].className + ' _has_error';
            err.push("Checking %s is required".replace("%s", elems[i].value));
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, err.join('<br/>'));
        }
      } else if (elem.tagName == 'SELECT') {
        var selected = true;
        if (elem.multiple) {
          selected = false;
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected) {
              selected = true;
              break;
            }
          }
        } else {
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected && !elem.options[i].value) {
              selected = false;
            }
          }
        }
        if (!selected) {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "Please select an option.");
        }
      } else if (value === undefined || value === null || value === '') {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "This field is required.");
      }
    }
    if (no_error && elem.name == 'email') {
      if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Enter a valid email address.");
      }
    }
    if (no_error && /date_field/.test(elem.className)) {
      if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Enter a valid date.");
      }
    }
    tooltip ? resize_tooltip(tooltip) : false;
    return no_error;
  };
  var needs_validate = function (el) {
    return el.name == 'email' || el.getAttribute('required') !== null;
  };
  var validate_form = function (e) {
    var err = form_to_submit.querySelector('._form_error'), no_error = true;
    if (!submitted) {
      submitted = true;
      for (var i = 0, len = allInputs.length; i < len; i++) {
        var input = allInputs[i];
        if (needs_validate(input)) {
          if (input.type == 'text') {
            addEvent(input, 'blur', function () {
              this.value = this.value.trim();
              validate_field(this, true);
            });
            addEvent(input, 'input', function () {
              validate_field(this, true);
            });
          } else if (input.type == 'radio' || input.type == 'checkbox') {
            (function (el) {
              var radios = form_to_submit.elements[el.name];
              for (var i = 0; i < radios.length; i++) {
                addEvent(radios[i], 'click', function () {
                  validate_field(el, true);
                });
              }
            })(input);
          } else if (input.tagName == 'SELECT') {
            addEvent(input, 'change', function () {
              validate_field(this, true);
            });
          } else if (input.type == 'textarea') {
            addEvent(input, 'input', function () {
              validate_field(this, true);
            });
          }
        }
      }
    }
    remove_tooltips();
    for (var i = 0, len = allInputs.length; i < len; i++) {
      var elem = allInputs[i];
      if (needs_validate(elem)) {
        if (elem.tagName.toLowerCase() !== "select") {
          elem.value = elem.value.trim();
        }
        validate_field(elem) ? true : no_error = false;
      }
    }
    if (!no_error && e) {
      e.preventDefault();
    }
    resize_tooltips();
    return no_error;
  };
  addEvent(window, 'resize', resize_tooltips);
  addEvent(window, 'scroll', resize_tooltips);
  window._old_serialize = null;
  if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;
  _load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function () {
    window._form_serialize = window.serialize;
    if (window._old_serialize) window.serialize = window._old_serialize;
  });
  var form_submit = function (e) {
    e.preventDefault();
    if (validate_form()) {
      // use this trick to get the submit button & disable it using plain javascript
      document.querySelector('#_form_1_submit').disabled = true;
      var serialized = _form_serialize(document.getElementById('_form_1_'));
      var err = form_to_submit.querySelector('._form_error');
      err ? err.parentNode.removeChild(err) : false;
      _load_script('https://michaelmoussalli.activehosted.com/proc.php?' + serialized + '&jsonp=true');
    }
    return false;
  };
  addEvent(form_to_submit, 'submit', form_submit);
})();

