/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Interface Song
  */

/**
 * @desc Interface Song
 * @classdesc The Song interface is the interface that defines the song object
 */
export interface Song {
  title: string;
  artist: string;
  album: string;
  duration: number;
  url: string;
}
