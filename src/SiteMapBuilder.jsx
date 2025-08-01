import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sitemap.css'; // Archivo CSS adicional

const sitemap = [
  {
    title: 'Mi Panel de Inscripción',
    children: [
      {
        title: '1. Planificador de Semestre',
        children: [
          { title: 'Vista de turno (con contador regresivo)' },
          { title: 'Carga sugerida' },
          {
            title: 'Explorador de materias',
            children: [
              { title: 'Filtros por profesor, campus, modalidad' },
              { title: 'Cupos en tiempo real' },
              { title: 'Detalles de materia (prerrequisitos, sinopsis)' },
            ],
          },
          {
            title: 'Constructor de horario visual',
            children: [
              { title: 'Vista previa de horario' },
              { title: 'Validación de errores (traslapes, reglas)' },
              { title: 'Guardar múltiples horarios' },
            ],
          },
        ],
      },
      {
        title: '2. Confirmar mi Horario y Pago',
        children: [
          {
            title: 'Confirmación académica',
            children: [
              { title: 'Selección de horario guardado' },
              { title: 'Añadir / cambiar grupo' },
              { title: 'Confirmar horario' },
            ],
          },
          {
            title: 'Configuración financiera',
            children: [
              { title: 'Desglose del total a pagar' },
              { title: 'Selección de plan de pago (contado / MSI)' },
              { title: 'Selección de SGMM (sí / no)' },
            ],
          },
        ],
      },
      {
        title: '3. Finalizar Pago y Obtener Documentos',
        children: [
          { title: 'Motor de pagos integrado' },
          { title: 'Estado final: "Inscripción completa"' },
          { title: 'Descarga de horario final' },
          { title: 'Comprobante de pago' },
        ],
      },
      {
        title: '4. Consultas posteriores y soporte',
        children: [
          { title: 'Estado de cuenta' },
          { title: 'Historial de cambios' },
          { title: 'Alertas del sistema (contextuales)' },
          { title: 'Confirmaciones y notificaciones' },
        ],
      },
      {
        title: '5. Mi Perfil / Acceso',
        children: [
          { title: 'Inicio de sesión (SSO)' },
          { title: 'Visualización del perfil' },
          { title: 'Salida segura del sistema' },
        ],
      },
    ],
  },
];

function TreeNode({ node, level = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`tree-node mb-3 level-${level}`}>
      <div
        className={`card shadow ${hasChildren ? 'border-primary' : 'border-secondary'} card-level-${level}`}
        onClick={(e) => {
          e.stopPropagation();
          hasChildren && setExpanded(!expanded);
        }}
        style={{ cursor: hasChildren ? 'pointer' : 'default' }}
      >
        <div className={`card-body ${hasChildren ? 'bg-light' : 'bg-white'}`}>
          <h5 className={`card-title mb-0 ${level > 0 ? 'fs-6 text-muted' : 'fs-5'}`}>
            {node.title}
            {hasChildren && (
              <span className="float-end text-primary">{expanded ? '▼' : '▶'}</span>
            )}
          </h5>
        </div>
        {hasChildren && expanded && (
          <div className="card-body pt-2">
            <div className="d-flex flex-wrap gap-3 justify-content-center align-items-start">
              {node.children.map((child, index) => (
                <div key={index} className="child-arrow-container">
                  <div className="arrow-down" />
                  <TreeNode node={child} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SiteMapBuilder() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: '1200px' }}>
        <h1 className="mb-4 text-center text-primary">Mapa de Navegación - Proceso de Inscripción</h1>
        {sitemap.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </div>
    </div>
  );
}



