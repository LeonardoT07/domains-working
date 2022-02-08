import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import appConfig from '../config.json';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Image src={appConfig.logo} width={300} height={65} />
      <Typography
        variant="body1"
        sx={{
          marginTop: '35px',
          marginBottom: '15px',
          textAlign: 'center',
          color: appConfig.theme.colors.neutrals['800'],
        }}
      >
        Deseja informações sobre algum domínio?
        {' '}
        <br />
        Use o campo de pesquisa abaixo:
      </Typography>
      <TextField id="searchDomain" variant="outlined" placeholder="Pesquise seu domínio" />
    </Box>
  );
}
