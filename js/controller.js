document.addEventListener('DOMContentLoaded', function () {
  const konten = document.querySelectorAll('#manfaat');
  for (i = 0; i < konten.length; i++) {
    konten[i].setAttribute('value', deskripsi[i].isi);
  }
});

// OBJEK 1
function showDesc1() {
  const desc = document.querySelector('#desc1');
  const tanaman = document.querySelector('#model-tanaman1');
  const read = document.querySelector('#read1');
  if (read.getAttribute('value') === 'READ') {
    read.setAttribute('value', 'CLOSE');
    desc.setAttribute('visible', 'true');
    desc.emit('move-up');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
  } else {
    read.setAttribute('value', 'READ');
    desc.emit('move-down');
    setTimeout(() => {
      desc.setAttribute('visible', 'false');
    }, 1500);
    tanaman.emit('pause-objek');
  }
}

function playDesc1() {
  const play = document.querySelector('#play1');
  const stop = document.querySelector('#stop1');
  const human = document.querySelector('#host1');
  const tanaman = document.querySelector('#model-tanaman1');
  if (play.getAttribute('value') === 'PLAY') {
    play.setAttribute('value', 'PAUSE');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
    stop.setAttribute('visible', 'true');
    human.setAttribute('visible', 'true');
    human.setAttribute(
      'animation-mixer',
      'repetitions:1;clampWhenFinished:true;duration:5'
    );
    setTimeout(() => {
      human.components.sound.playSound();
    }, 5000);
  } else {
    play.setAttribute('value', 'PLAY');
    tanaman.emit('pause-objek');
    human.components.sound.pauseSound();
  }
  human.addEventListener('sound-ended', function () {
    play.setAttribute('value', 'PLAY');
    human.removeAttribute('animation-mixer');
    human.setAttribute('visible', 'false');
    stop.setAttribute('visible', 'false');
    tanaman.emit('stop-objek');
  });
}
function stopDesc1() {
  const stop = document.querySelector('#stop1');
  const play = document.querySelector('#play1');
  const human = document.querySelector('#host1');
  const tanaman = document.querySelector('#model-tanaman1');
  play.setAttribute('value', 'PLAY');
  human.removeAttribute('animation-mixer');
  human.setAttribute('visible', 'false');
  stop.setAttribute('visible', 'false');
  tanaman.emit('stop-objek');
  human.components.sound.stopSound();
}

// OBJEK 2
function showDesc2() {
  const desc = document.querySelector('#desc2');
  const tanaman = document.querySelector('#model-tanaman2');
  const read = document.querySelector('#read2');
  if (read.getAttribute('value') === 'READ') {
    read.setAttribute('value', 'CLOSE');
    desc.setAttribute('visible', 'true');
    desc.emit('move-up');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
  } else {
    read.setAttribute('value', 'READ');
    desc.emit('move-down');
    setTimeout(() => {
      desc.setAttribute('visible', 'false');
    }, 1500);
    tanaman.emit('pause-objek');
  }
}

function playDesc2() {
  const play = document.querySelector('#play2');
  const stop = document.querySelector('#stop2');
  const human = document.querySelector('#host2');
  const tanaman = document.querySelector('#model-tanaman2');
  if (play.getAttribute('value') === 'PLAY') {
    play.setAttribute('value', 'PAUSE');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
    stop.setAttribute('visible', 'true');
    human.setAttribute('visible', 'true');
    human.setAttribute(
      'animation-mixer',
      'repetitions:1;clampWhenFinished:true;duration:5'
    );
    setTimeout(() => {
      human.components.sound.playSound();
    }, 5000);
  } else {
    play.setAttribute('value', 'PLAY');
    tanaman.emit('pause-objek');
    human.components.sound.pauseSound();
  }
  human.addEventListener('sound-ended', function () {
    play.setAttribute('value', 'PLAY');
    human.removeAttribute('animation-mixer');
    human.setAttribute('visible', 'false');
    stop.setAttribute('visible', 'false');
    tanaman.emit('stop-objek');
  });
}
function stopDesc2() {
  const stop = document.querySelector('#stop2');
  const play = document.querySelector('#play2');
  const human = document.querySelector('#host2');
  const tanaman = document.querySelector('#model-tanaman2');
  play.setAttribute('value', 'PLAY');
  human.removeAttribute('animation-mixer');
  human.setAttribute('visible', 'false');
  stop.setAttribute('visible', 'false');
  tanaman.emit('stop-objek');
  human.components.sound.stopSound();
}

// OBJEK 3
function showDesc3() {
  const desc = document.querySelector('#desc3');
  const tanaman = document.querySelector('#model-tanaman3');
  const read = document.querySelector('#read3');
  if (read.getAttribute('value') === 'READ') {
    read.setAttribute('value', 'CLOSE');
    desc.setAttribute('visible', 'true');
    desc.emit('move-up');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
  } else {
    read.setAttribute('value', 'READ');
    desc.emit('move-down');
    setTimeout(() => {
      desc.setAttribute('visible', 'false');
    }, 1500);
    tanaman.emit('pause-objek');
  }
}

function playDesc3() {
  const play = document.querySelector('#play3');
  const stop = document.querySelector('#stop3');
  const human = document.querySelector('#host3');
  const tanaman = document.querySelector('#model-tanaman3');
  if (play.getAttribute('value') === 'PLAY') {
    play.setAttribute('value', 'PAUSE');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
    stop.setAttribute('visible', 'true');
    human.setAttribute('visible', 'true');
    human.setAttribute(
      'animation-mixer',
      'repetitions:1;clampWhenFinished:true;duration:5'
    );
    setTimeout(() => {
      human.components.sound.playSound();
    }, 5000);
  } else {
    play.setAttribute('value', 'PLAY');
    tanaman.emit('pause-objek');
    human.components.sound.pauseSound();
  }
  human.addEventListener('sound-ended', function () {
    play.setAttribute('value', 'PLAY');
    human.removeAttribute('animation-mixer');
    human.setAttribute('visible', 'false');
    stop.setAttribute('visible', 'false');
    tanaman.emit('stop-objek');
  });
}
function stopDesc3() {
  const stop = document.querySelector('#stop3');
  const play = document.querySelector('#play3');
  const human = document.querySelector('#host3');
  const tanaman = document.querySelector('#model-tanaman3');
  play.setAttribute('value', 'PLAY');
  human.removeAttribute('animation-mixer');
  human.setAttribute('visible', 'false');
  stop.setAttribute('visible', 'false');
  tanaman.emit('stop-objek');
  human.components.sound.stopSound();
}

// OBJEK 4
function showDesc4() {
  const desc = document.querySelector('#desc4');
  const tanaman = document.querySelector('#model-tanaman4');
  const read = document.querySelector('#read4');
  if (read.getAttribute('value') === 'READ') {
    read.setAttribute('value', 'CLOSE');
    desc.setAttribute('visible', 'true');
    desc.emit('move-up');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
  } else {
    read.setAttribute('value', 'READ');
    desc.emit('move-down');
    setTimeout(() => {
      desc.setAttribute('visible', 'false');
    }, 1500);
    tanaman.emit('pause-objek');
  }
}

function playDesc4() {
  const play = document.querySelector('#play4');
  const stop = document.querySelector('#stop4');
  const human = document.querySelector('#host4');
  const tanaman = document.querySelector('#model-tanaman4');
  if (play.getAttribute('value') === 'PLAY') {
    play.setAttribute('value', 'PAUSE');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
    stop.setAttribute('visible', 'true');
    human.setAttribute('visible', 'true');
    human.setAttribute(
      'animation-mixer',
      'repetitions:1;clampWhenFinished:true;duration:5'
    );
    setTimeout(() => {
      human.components.sound.playSound();
    }, 5000);
  } else {
    play.setAttribute('value', 'PLAY');
    tanaman.emit('pause-objek');
    human.components.sound.pauseSound();
  }
  human.addEventListener('sound-ended', function () {
    play.setAttribute('value', 'PLAY');
    human.removeAttribute('animation-mixer');
    human.setAttribute('visible', 'false');
    stop.setAttribute('visible', 'false');
    tanaman.emit('stop-objek');
  });
}
function stopDesc4() {
  const stop = document.querySelector('#stop4');
  const play = document.querySelector('#play4');
  const human = document.querySelector('#host4');
  const tanaman = document.querySelector('#model-tanaman4');
  play.setAttribute('value', 'PLAY');
  human.removeAttribute('animation-mixer');
  human.setAttribute('visible', 'false');
  stop.setAttribute('visible', 'false');
  tanaman.emit('stop-objek');
  human.components.sound.stopSound();
}

// OBJEK 5
function showDesc5() {
  const desc = document.querySelector('#desc5');
  const tanaman = document.querySelector('#model-tanaman5');
  const read = document.querySelector('#read5');
  if (read.getAttribute('value') === 'READ') {
    read.setAttribute('value', 'CLOSE');
    desc.setAttribute('visible', 'true');
    desc.emit('move-up');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
  } else {
    read.setAttribute('value', 'READ');
    desc.emit('move-down');
    setTimeout(() => {
      desc.setAttribute('visible', 'false');
    }, 1500);
    tanaman.emit('pause-objek');
  }
}

function playDesc5() {
  const play = document.querySelector('#play5');
  const stop = document.querySelector('#stop5');
  const human = document.querySelector('#host5');
  const tanaman = document.querySelector('#model-tanaman5');
  if (play.getAttribute('value') === 'PLAY') {
    play.setAttribute('value', 'PAUSE');
    tanaman.emit('putar-objek') || tanaman.emit('resume-objek');
    stop.setAttribute('visible', 'true');
    human.setAttribute('visible', 'true');
    human.setAttribute(
      'animation-mixer',
      'repetitions:1;clampWhenFinished:true;duration:5'
    );
    setTimeout(() => {
      human.components.sound.playSound();
    }, 5000);
  } else {
    play.setAttribute('value', 'PLAY');
    tanaman.emit('pause-objek');
    human.components.sound.pauseSound();
  }
  human.addEventListener('sound-ended', function () {
    play.setAttribute('value', 'PLAY');
    human.removeAttribute('animation-mixer');
    human.setAttribute('visible', 'false');
    stop.setAttribute('visible', 'false');
    tanaman.emit('stop-objek');
  });
}
function stopDesc5() {
  const stop = document.querySelector('#stop5');
  const play = document.querySelector('#play5');
  const human = document.querySelector('#host5');
  const tanaman = document.querySelector('#model-tanaman5');
  play.setAttribute('value', 'PLAY');
  human.removeAttribute('animation-mixer');
  human.setAttribute('visible', 'false');
  stop.setAttribute('visible', 'false');
  tanaman.emit('stop-objek');
  human.components.sound.stopSound();
}
