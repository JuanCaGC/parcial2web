import { PerformerEntity } from 'src/performer/performer.entity';
import { TrackEntity } from 'src/track/track.entity';
import { Column, Entity, OneToMany, ManyToMany,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlbumEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 nombre : string;
 
 @Column()
 caratula : string;
 
 @Column()
 fechaLanzamiento: Date;
 
 @Column()
 descripcion: string;

 @OneToMany(() => TrackEntity, track => track.album)
 tracks: TrackEntity[];

 @ManyToMany(() => PerformerEntity, performer => performer.albums)
 performers: PerformerEntity[];
}