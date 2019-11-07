import React from 'react';
import { FaFilePdf, FaVideo, FaPodcast, FaCodeBranch } from 'react-icons/fa';
import { Container } from './styles';

export default function Metodologia() {
  return (
    <Container>
      <div className="content">
        {/* <!-- card --> */}
        <div className="card">
          <div className="icon">
            <FaFilePdf className="material-icons md-36" />
          </div>
          <p className="title">PDFs</p>
          <p className="text">Click e veja todos os PDFs sobre metodologia.</p>
        </div>

        <div className="card">
          <div className="icon">
            <FaVideo className="material-icons md-36" />
          </div>
          <p className="title">Vídeos</p>
          <p className="text">
            Click e veja todos os vídeos sobre metodologia.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FaPodcast className="material-icons md-36" />
          </div>
          <p className="title">PodCasts</p>
          <p className="text">
            Click e veja todos os podcasts sobre metodologia.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FaCodeBranch className="material-icons md-36" />
          </div>
          <p className="title">Mapas Mentais</p>
          <p className="text">
            Click e veja todos os mapas mentais sobre metodologia.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FaCodeBranch className="material-icons md-36" />
          </div>
          <p className="title">Mapas Mentais</p>
          <p className="text">
            Click e veja todos os mapas mentais sobre metodologia.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FaCodeBranch className="material-icons md-36" />
          </div>
          <p className="title">Mapas Mentais</p>
          <p className="text">
            Click e veja todos os mapas mentais sobre metodologia.
          </p>
        </div>
      </div>
    </Container>
  );
}
