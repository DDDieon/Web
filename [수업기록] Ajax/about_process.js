// exit 이벤트를 연결합니다.

process.on('exit', () => {

    console.log('프로세스가 종료되었습니다.');

});

// uncaughtException 이벤트를 연결합니다.

process.on('uncaughtException', () => {

    console.log('예외가 발생했습니다.');

});

// 예외를 강제로 발생시킵니다.

error.error.error();