-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-10-2021 a las 02:13:57
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_sismantenimiento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE `trabajador` (
  `codigo_trabajador` int(11) NOT NULL,
  `dni_trabajador` varchar(8) NOT NULL,
  `apellidos_trabajador` varchar(200) NOT NULL,
  `nombres_trabajador` varchar(200) NOT NULL,
  `sueldo_trabajador` decimal(10,2) NOT NULL,
  `estado_trabajador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`codigo_trabajador`, `dni_trabajador`, `apellidos_trabajador`, `nombres_trabajador`, `sueldo_trabajador`, `estado_trabajador`) VALUES
(1, '15874858', 'LEON', 'AURORA', '2000000.00', 1),
(2, '78383838', 'VARGAS', 'PEDRO', '34400.00', 1),
(3, '78394938', 'LEON SOLORZANO', 'ALFONSO', '3000.00', 1),
(4, '72812719', 'VARGAS LEON', 'BEATRIZ MILAGRITOS', '33335.00', 1),
(5, '82374829', 'CHAVEZ', 'PERCY', '3300.00', 1),
(6, '90349388', 'ROMAN', 'SANDY', '5500.00', 1),
(7, '73436722', 'ROJAS', 'NICOL', '2000.00', 1),
(8, '38493848', 'VILLAMIL', 'RODRIGO', '400000.50', 1),
(9, '34344566', 'VALERIO', 'MICAELA', '200.99', 1),
(10, '84372617', 'ROSALES', 'SANDY', '4880.50', 1),
(11, '34564435', 'SANCHEZ', 'OLIVIA', '2350.00', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`codigo_trabajador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  MODIFY `codigo_trabajador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
