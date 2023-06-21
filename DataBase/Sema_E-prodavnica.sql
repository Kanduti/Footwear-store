-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema konacnabaza
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema konacnabaza
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `konacnabaza` DEFAULT CHARACTER SET utf8mb3 ;
-- -----------------------------------------------------
-- Schema molimte
-- -----------------------------------------------------
USE `konacnabaza` ;

-- -----------------------------------------------------
-- Table `konacnabaza`.`drzava`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`drzava` (
  `idDrzava` INT NOT NULL AUTO_INCREMENT,
  `Drzava` VARCHAR(45) NOT NULL,
  `Poziv_na_br` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDrzava`),
  UNIQUE INDEX `idDrzava_UNIQUE` (`idDrzava` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`opstina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`opstina` (
  `Opstina_id` INT NOT NULL AUTO_INCREMENT,
  `Opstina` VARCHAR(45) NOT NULL,
  `Drzava_idDrzava` INT NOT NULL,
  PRIMARY KEY (`Opstina_id`),
  UNIQUE INDEX `Opstina_id_UNIQUE` (`Opstina_id` ASC) VISIBLE,
  INDEX `fk_Opstina_Drzava_idx` (`Drzava_idDrzava` ASC) VISIBLE,
  CONSTRAINT `fk_Opstina_Drzava`
    FOREIGN KEY (`Drzava_idDrzava`)
    REFERENCES `konacnabaza`.`drzava` (`idDrzava`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`mesto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`mesto` (
  `Mesto_id` INT NOT NULL AUTO_INCREMENT,
  `Mesto` VARCHAR(45) NOT NULL,
  `Opstina_Opstina_id` INT NOT NULL,
  PRIMARY KEY (`Mesto_id`),
  UNIQUE INDEX `Mesto_id_UNIQUE` (`Mesto_id` ASC) VISIBLE,
  INDEX `fk_Mesto_Opstina1_idx` (`Opstina_Opstina_id` ASC) VISIBLE,
  CONSTRAINT `fk_Mesto_Opstina1`
    FOREIGN KEY (`Opstina_Opstina_id`)
    REFERENCES `konacnabaza`.`opstina` (`Opstina_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`adresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`adresa` (
  `Adresa_id` INT NOT NULL AUTO_INCREMENT,
  `Adresa` VARCHAR(45) NOT NULL,
  `postanski_br` INT NOT NULL,
  `Pozivni_br` VARCHAR(45) NOT NULL,
  `Mesto_Mesto_id` INT NOT NULL,
  PRIMARY KEY (`Adresa_id`),
  UNIQUE INDEX `Adresa_id_UNIQUE` (`Adresa_id` ASC) VISIBLE,
  INDEX `fk_Adresa_Mesto1_idx` (`Mesto_Mesto_id` ASC) VISIBLE,
  CONSTRAINT `fk_Adresa_Mesto1`
    FOREIGN KEY (`Mesto_Mesto_id`)
    REFERENCES `konacnabaza`.`mesto` (`Mesto_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`obuca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`obuca` (
  `idObuca` INT NOT NULL AUTO_INCREMENT,
  `Market_price_in_€` INT NOT NULL,
  `Vrsta` VARCHAR(45) NOT NULL,
  `Model_Naslov` VARCHAR(45) NOT NULL,
  `Uzrast` VARCHAR(45) NOT NULL,
  `Slika` BLOB NULL DEFAULT NULL,
  `Popust` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idObuca`),
  UNIQUE INDEX `idObuca_UNIQUE` (`idObuca` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`inventar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`inventar` (
  `idCipele` INT NOT NULL AUTO_INCREMENT,
  `Slika_u_boji` BLOB NULL DEFAULT NULL,
  `Velicina_eur` INT NOT NULL,
  `Kolicina` INT NOT NULL,
  `Boja` VARCHAR(45) NOT NULL,
  `Obuca_idObuca` INT NOT NULL,
  PRIMARY KEY (`idCipele`),
  UNIQUE INDEX `idCipele_UNIQUE` (`idCipele` ASC) VISIBLE,
  INDEX `fk_Inventar_Obuca1_idx` (`Obuca_idObuca` ASC) VISIBLE,
  CONSTRAINT `fk_Inventar_Obuca1`
    FOREIGN KEY (`Obuca_idObuca`)
    REFERENCES `konacnabaza`.`obuca` (`idObuca`))
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`korisnik`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`korisnik` (
  `idKorisnik` INT NOT NULL AUTO_INCREMENT,
  `Ime_i_prezime` VARCHAR(45) NOT NULL,
  `Email_adresa` VARCHAR(45) NOT NULL,
  `Drzava_idDrzava` INT NOT NULL,
  `Opstina_Opstina_id` INT NULL DEFAULT NULL,
  `Adresa_Adresa_id` INT NULL DEFAULT NULL,
  `Mesto_Mesto_id` INT NULL DEFAULT NULL,
  `Br_kartice` VARCHAR(45) NULL DEFAULT NULL,
  `CNN` VARCHAR(45) NULL DEFAULT NULL,
  `Ime_sa_katrice` VARCHAR(45) NULL DEFAULT NULL,
  `prezime_sa_kartice` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idKorisnik`),
  UNIQUE INDEX `idKorisnik_UNIQUE` (`idKorisnik` ASC) VISIBLE,
  INDEX `fk_Korisnik_Drzava1_idx` (`Drzava_idDrzava` ASC) VISIBLE,
  INDEX `fk_Korisnik_Opstina1_idx` (`Opstina_Opstina_id` ASC) VISIBLE,
  INDEX `fk_Korisnik_Adresa1_idx` (`Adresa_Adresa_id` ASC) VISIBLE,
  INDEX `fk_Korisnik_Mesto1_idx` (`Mesto_Mesto_id` ASC) VISIBLE,
  CONSTRAINT `fk_Korisnik_Adresa1`
    FOREIGN KEY (`Adresa_Adresa_id`)
    REFERENCES `konacnabaza`.`adresa` (`Adresa_id`),
  CONSTRAINT `fk_Korisnik_Drzava1`
    FOREIGN KEY (`Drzava_idDrzava`)
    REFERENCES `konacnabaza`.`drzava` (`idDrzava`),
  CONSTRAINT `fk_Korisnik_Mesto1`
    FOREIGN KEY (`Mesto_Mesto_id`)
    REFERENCES `konacnabaza`.`mesto` (`Mesto_id`),
  CONSTRAINT `fk_Korisnik_Opstina1`
    FOREIGN KEY (`Opstina_Opstina_id`)
    REFERENCES `konacnabaza`.`opstina` (`Opstina_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`ip_adresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`ip_adresa` (
  `idIp_adresa` INT NOT NULL AUTO_INCREMENT,
  `Vreme_prijave` DATETIME NOT NULL,
  `korisnik_idKorisnik` INT NOT NULL,
  PRIMARY KEY (`idIp_adresa`),
  UNIQUE INDEX `idIp_adresa_UNIQUE` (`idIp_adresa` ASC) VISIBLE,
  INDEX `fk_ip_adresa_korisnik1_idx` (`korisnik_idKorisnik` ASC) VISIBLE,
  CONSTRAINT `fk_ip_adresa_korisnik1`
    FOREIGN KEY (`korisnik_idKorisnik`)
    REFERENCES `konacnabaza`.`korisnik` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `konacnabaza`.`tranzakcije`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`tranzakcije` (
  `idTranzakcije` INT NOT NULL AUTO_INCREMENT,
  `Vreme` DATETIME NOT NULL,
  `Inventar_idCipele` INT NOT NULL,
  `korisnik_idKorisnik` INT NOT NULL,
  PRIMARY KEY (`idTranzakcije`),
  UNIQUE INDEX `idTranzakcije_UNIQUE` (`idTranzakcije` ASC) VISIBLE,
  INDEX `fk_tranzakcije_Inventar1_idx` (`Inventar_idCipele` ASC) VISIBLE,
  INDEX `fk_tranzakcije_korisnik2_idx` (`korisnik_idKorisnik` ASC) VISIBLE,
  CONSTRAINT `fk_tranzakcije_Inventar1`
    FOREIGN KEY (`Inventar_idCipele`)
    REFERENCES `konacnabaza`.`inventar` (`idCipele`),
  CONSTRAINT `fk_tranzakcije_korisnik2`
    FOREIGN KEY (`korisnik_idKorisnik`)
    REFERENCES `konacnabaza`.`korisnik` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;

USE `konacnabaza` ;

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`cipele`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`cipele` (`idObuca` INT, `Market_price_in_€` INT, `Vrsta` INT, `Model_Naslov` INT, `Uzrast` INT, `Slika` INT, `Popust` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`cizme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`cizme` (`idObuca` INT, `Market_price_in_€` INT, `Vrsta` INT, `Model_Naslov` INT, `Uzrast` INT, `Slika` INT, `Popust` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`papuce`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`papuce` (`idObuca` INT, `Market_price_in_€` INT, `Vrsta` INT, `Model_Naslov` INT, `Uzrast` INT, `Slika` INT, `Popust` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`patike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`patike` (`idObuca` INT, `Market_price_in_€` INT, `Vrsta` INT, `Model_Naslov` INT, `Uzrast` INT, `Slika` INT, `Popust` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`prijave_klijenata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`prijave_klijenata` (`Ime i prezime` INT, `Email` INT, `Drzava` INT, `Vreme_prijave` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`sandale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`sandale` (`idObuca` INT, `Market_price_in_€` INT, `Vrsta` INT, `Model_Naslov` INT, `Uzrast` INT, `Slika` INT, `Popust` INT);

-- -----------------------------------------------------
-- Placeholder table for view `konacnabaza`.`tranzakcija_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `konacnabaza`.`tranzakcija_info` (`Vreme` INT, `Kupac` INT, `cena` INT);

-- -----------------------------------------------------
-- View `konacnabaza`.`cipele`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`cipele`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`cipele` AS select `konacnabaza`.`obuca`.`idObuca` AS `idObuca`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `Market_price_in_€`,`konacnabaza`.`obuca`.`Vrsta` AS `Vrsta`,`konacnabaza`.`obuca`.`Model_Naslov` AS `Model_Naslov`,`konacnabaza`.`obuca`.`Uzrast` AS `Uzrast`,`konacnabaza`.`obuca`.`Slika` AS `Slika`,`konacnabaza`.`obuca`.`Popust` AS `Popust` from `konacnabaza`.`obuca` where (`konacnabaza`.`obuca`.`Vrsta` = 'cipele');

-- -----------------------------------------------------
-- View `konacnabaza`.`cizme`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`cizme`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`cizme` AS select `konacnabaza`.`obuca`.`idObuca` AS `idObuca`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `Market_price_in_€`,`konacnabaza`.`obuca`.`Vrsta` AS `Vrsta`,`konacnabaza`.`obuca`.`Model_Naslov` AS `Model_Naslov`,`konacnabaza`.`obuca`.`Uzrast` AS `Uzrast`,`konacnabaza`.`obuca`.`Slika` AS `Slika`,`konacnabaza`.`obuca`.`Popust` AS `Popust` from `konacnabaza`.`obuca` where (`konacnabaza`.`obuca`.`Vrsta` = 'cizme');

-- -----------------------------------------------------
-- View `konacnabaza`.`papuce`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`papuce`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`papuce` AS select `konacnabaza`.`obuca`.`idObuca` AS `idObuca`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `Market_price_in_€`,`konacnabaza`.`obuca`.`Vrsta` AS `Vrsta`,`konacnabaza`.`obuca`.`Model_Naslov` AS `Model_Naslov`,`konacnabaza`.`obuca`.`Uzrast` AS `Uzrast`,`konacnabaza`.`obuca`.`Slika` AS `Slika`,`konacnabaza`.`obuca`.`Popust` AS `Popust` from `konacnabaza`.`obuca` where (`konacnabaza`.`obuca`.`Vrsta` = 'papuce');

-- -----------------------------------------------------
-- View `konacnabaza`.`patike`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`patike`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`patike` AS select `konacnabaza`.`obuca`.`idObuca` AS `idObuca`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `Market_price_in_€`,`konacnabaza`.`obuca`.`Vrsta` AS `Vrsta`,`konacnabaza`.`obuca`.`Model_Naslov` AS `Model_Naslov`,`konacnabaza`.`obuca`.`Uzrast` AS `Uzrast`,`konacnabaza`.`obuca`.`Slika` AS `Slika`,`konacnabaza`.`obuca`.`Popust` AS `Popust` from `konacnabaza`.`obuca` where (`konacnabaza`.`obuca`.`Vrsta` = 'patike');

-- -----------------------------------------------------
-- View `konacnabaza`.`prijave_klijenata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`prijave_klijenata`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`prijave_klijenata` AS select `konacnabaza`.`korisnik`.`Ime_i_prezime` AS `Ime i prezime`,`konacnabaza`.`korisnik`.`Email_adresa` AS `Email`,`konacnabaza`.`drzava`.`Drzava` AS `Drzava`,`konacnabaza`.`ip_adresa`.`Vreme_prijave` AS `Vreme_prijave` from ((`konacnabaza`.`korisnik` join `konacnabaza`.`drzava` on((`konacnabaza`.`korisnik`.`Drzava_idDrzava` = `konacnabaza`.`drzava`.`idDrzava`))) join `konacnabaza`.`ip_adresa` on((`konacnabaza`.`ip_adresa`.`Korisnik_idKorisnik` = `konacnabaza`.`korisnik`.`idKorisnik`)));

-- -----------------------------------------------------
-- View `konacnabaza`.`sandale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`sandale`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`sandale` AS select `konacnabaza`.`obuca`.`idObuca` AS `idObuca`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `Market_price_in_€`,`konacnabaza`.`obuca`.`Vrsta` AS `Vrsta`,`konacnabaza`.`obuca`.`Model_Naslov` AS `Model_Naslov`,`konacnabaza`.`obuca`.`Uzrast` AS `Uzrast`,`konacnabaza`.`obuca`.`Slika` AS `Slika`,`konacnabaza`.`obuca`.`Popust` AS `Popust` from `konacnabaza`.`obuca` where (`konacnabaza`.`obuca`.`Vrsta` = 'sandale');

-- -----------------------------------------------------
-- View `konacnabaza`.`tranzakcija_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `konacnabaza`.`tranzakcija_info`;
USE `konacnabaza`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `konacnabaza`.`tranzakcija_info` AS select `konacnabaza`.`tranzakcije`.`Vreme` AS `Vreme`,`konacnabaza`.`korisnik`.`Ime_i_prezime` AS `Kupac`,`konacnabaza`.`obuca`.`Market_price_in_€` AS `cena` from ((`konacnabaza`.`tranzakcije` join `konacnabaza`.`obuca` on((`konacnabaza`.`obuca`.`idObuca` = (select `konacnabaza`.`inventar`.`Obuca_idObuca` from `konacnabaza`.`inventar` where (`konacnabaza`.`inventar`.`idCipele` = `konacnabaza`.`tranzakcije`.`Inventar_idCipele`))))) join `konacnabaza`.`korisnik` on((`konacnabaza`.`korisnik`.`idKorisnik` = `konacnabaza`.`tranzakcije`.`korisnik_idKorisnik`)));

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
