const Ftp = require('jsftp');

    const ftp = new Ftp({
      host: 'ftp.example.com',
      port: 21,
      user: 'username',
      pass: 'password'
    });

    ftp.ls('.', (err, res) => {
      if (err) console.error(err);
      console.log('Directory listing:', res);
      ftp.destroy(); // Close the connection
    });