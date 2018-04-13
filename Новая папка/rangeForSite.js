  function functionCh() {
    let users = document.getElementById('userNum');
    let us = document.getElementById('us');
    let cpu = document.getElementById('CPU');
    let ram = document.getElementById('RAM');
    let ssd = document.getElementById('SSD');
    let price = document.getElementById('priceNonal');
    let priceNal = document.getElementById('priceNal');
    let chCPU = document.getElementById('chCPU');
    let chRAM = document.getElementById('chRAM');
    let chSSD = document.getElementById('chSSD');
    let cpuVar;
    let usersCoun = parseInt(users.value);
    ram.value = usersCoun * 1.6;
    ssd.value = usersCoun * 20;
    us.value = usersCoun;
    if (usersCoun < 10) {
        cpuVar = 2;
    } else {
        cpuVar = usersCoun * 0.2;
    }
    cpu.value = Math.floor(cpuVar);
    chCPU.value = cpu.value;
    chRAM.value = ram.value;
    chSSD.value = ssd.value;
    if (usersCoun < 10) {
        price.value = 680 * usersCoun;
        priceNal.value = 600 * usersCoun;
    } else if (usersCoun > 9 && usersCoun < 21) {
        price.value = 500 * usersCoun;
        priceNal.value = 440 * usersCoun;
    } else if (usersCoun > 20) {
        price.value = 460 * usersCoun;
        priceNal.value = 400 * usersCoun;
    }
}

function chCPU(e) {
    let cpu = document.getElementById('CPU');
    let chCPU = document.getElementById('chCPU');
    let users = document.getElementById('userNum');
    let us = parseInt(users.value);
    let price = document.getElementById('priceNonal');
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let cpuVar;
    if (users < 10) {
        cpuVar = 2;
    } else {
        cpuVar = us * 0.2;
    }
    if (cpu.value < Math.floor(cpuVar)) {
        cpu.value = Math.floor(cpuVar);
    }
    let priceInt = parseInt(price.value);
    priceInt += (cpu.value - chCPU.value) * 220;
    priceNalInt += (cpu.value - chCPU.value) * 190;
    priceNal.value = priceNalInt;
    chCPU.value = cpu.value;
    price.value = priceInt;

}

function chCPUIn(e) {
    let cpu = document.getElementById('CPU');
    let chCPU = document.getElementById('chCPU');
    let users = document.getElementById('userNum');
    let us = parseInt(users.value);
    let price = document.getElementById('priceNonal');
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let cpuVar;
    if (users < 10) {
        cpuVar = 2;
    } else {
        cpuVar = us * 0.2;
    }
    if (chCPU.value < Math.floor(cpuVar)) {
        chCPU.value = Math.floor(cpuVar);
    }
    if (chCPU.value > 24) {
        chCPU.value = 24;
    }
    let priceInt = parseInt(price.value);
    priceInt += (chCPU.value - cpu.value) * 220;
    priceNalInt += (chCPU.value - cpu.value) * 190;
    priceNal.value = priceNalInt;
    cpu.value = chCPU.value;
    price.value = priceInt;

}

function chRAM(e) {
    let ram = document.getElementById('RAM');
    let chRAM = document.getElementById('chRAM');
    let users = document.getElementById('userNum');
    let price = document.getElementById('priceNonal');
    let priceInt = parseInt(price.value);
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let us = parseInt(users.value);
    if (ram.value < (us * 1.6)) {
        ram.value = Math.floor(us * 1.6);
    }
    priceInt += (ram.value - chRAM.value) * 250;
    priceNalInt += (ram.value - chRAM.value) * 220;
    price.value = priceInt;
    priceNal.value = priceNalInt;
    chRAM.value = ram.value;
}

function chRAMIn(e) {
    let ram = document.getElementById('RAM');
    let chRAM = document.getElementById('chRAM');
    let users = document.getElementById('userNum');
    let price = document.getElementById('priceNonal');
    let priceInt = parseInt(price.value);
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let us = parseInt(users.value);
    if (chRAM.value < (us * 1.6)) {
        chRAM.value = Math.floor(us * 1.6);
    }
    console.log('befor ' + chRAM.value);
    if (chRAM.value >= 128) {
        chRAM.value = 128;
        console.log('in ' + chRAM.value);
    }
    console.log('after ' + chRAM.value);
    priceInt += (chRAM.value - ram.value) * 250;
    priceNalInt += (chRAM.value - ram.value) * 220;

    price.value = priceInt;
    priceNal.value = priceNalInt;
    ram.value = chRAM.value;
}

function chSSD(e) {
    let ssd = document.getElementById('SSD');
    let chSSD = document.getElementById('chSSD');
    let users = document.getElementById('userNum');
    let price = document.getElementById('priceNonal');
    let priceInt = parseInt(price.value);
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let ssdInt = ssd.value;
    let us = parseInt(users.value);
    ssdInt = us * 20;
    if (ssd.value < ssdInt) {
        ssd.value = ssdInt;
//         alert("Вы не можете уменьшать это значение(");
    }
    priceInt += (ssd.value - chSSD.value) * 9;
    priceNalInt += (ssd.value - chSSD.value) * 8;
    priceNal.value = priceNalInt;
    price.value = priceInt;
    chSSD.value = ssd.value;
}

function chSSDIn(e) {
    let ssd = document.getElementById('SSD');
    let chSSD = document.getElementById('chSSD');
    let users = document.getElementById('userNum');
    let price = document.getElementById('priceNonal');
    let priceInt = parseInt(price.value);
    let priceNal = document.getElementById('priceNal');
    let priceNalInt = parseInt(priceNal.value);
    let ssdInt = ssd.value;
    let us = parseInt(users.value);
    ssdInt = us * 20;
    if (chSSD.value < ssdInt) {
        chSSD.value = ssdInt;
//         alert("Вы не можете уменьшать это значение(");
    }
    if (chSSD.value > 1500) {
        chSSD.value = 1500;
    }
    priceInt += (chSSD.value - ssd.value) * 9;
    priceNalInt += (chSSD.value -ssd.value) * 8;
    priceNal.value = priceNalInt;
    price.value = priceInt;
    ssd.value = chSSD.value;
}

function chUSIn() {
  let users = document.getElementById('userNum');
  let us = document.getElementById('us');
  users.value = us.value;
  functionCh();
}