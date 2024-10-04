package com.project.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Cars")
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	public Long id;
	
	@Column(name = "Car_Name")
	private String CarName ;
	
	@Column(name = "Status")
	private String Status;
	
	@Column(name = "PRIX")
	private int Prix;

}
