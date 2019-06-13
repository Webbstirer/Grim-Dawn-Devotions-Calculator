
const BonusNav = props =>
(

                <nav className="navbar navbar-expand-lg">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="nav-item">
                                    DA: {props.da}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    OA: {props.oa}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Health %: {props.healthp}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Physique: {props.phys}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                     Cunning: {props.cunn}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Spirit: {props.spir}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="nav-item">
                                    Fire Resist%: {props.firer}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Cold Resist%: {props.coldr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Lightning Resist%: {props.lightr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Aether Resist %: {props.aetherr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Chaos Resist %: {props.chaosr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Bleed Resist %: {props.bleedr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Stun Duration %: {props.stund}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pierce Resist %: {props.piercer}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="nav-item">
                                    Armor Absorb %: {props.armora}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Pierce Resist %: {props.ppiercer}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Chaos Resist %: {props.pchaosr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Aether Resist %: {props.paetherr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Physical Damage %: {props.physd}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Bleed Damage %: {props.bleedd}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Internal Trauma Damage %: {props.itd}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="nav-item">
                                    Cold Damage %: {props.coldd}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pierce Damage %: {props.pierced}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Energy Regen/sec: {props.energyrps}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pierce Damage: {props.fpierced}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Constitution %: {props.consti}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet All Damage %: {props.palld}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="nav-item">
                                    Pet Elemental Resist%: {props.pelemr}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Bleed Damage over time: {props.bleedot}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Bleed Damage over time: {props.pbleedot}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Bleed Damage %: {props.pbleedd}
                                    </div>
                                </td>
                                <td>
                                    <div className="nav-item">
                                    Pet Attack Speed %: {props.pas}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div> */}
                </nav>
);
const SetDisplay = props =>
    (
        <div className="panel border col">
            <b>{props.title}</b>
            {props.values.map(v =>
                (
                    <DevChkBox
                        key={v.id}
                        id={v.id}
                        text={v.text ? v.text : props.getChecked('special') ? v.maxText : v.minText}
                        onChange={props.onChange.bind(null, v)}
                        textstyle={props.getChecked(v.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                    />
                ))}
        </div>
    );

const DevChkBox = props =>
    // use the standard dev
    <div>
        <input id={props.id} type="checkbox" checked={props.checked} onChange={props.onChange} />
        <span style={props.textstyle}>{props.text}</span>
    </div>

class Devotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkedItems: {}, useMax: false };
        // this.onChange=this.onChange.bind(this);
        // this.getChecked=this.getChecked.bind(this);
        // this.changeChecked=this.changeChecked.bind(this);
        Object.getOwnPropertyNames(Devotes.prototype).filter(x => x != "constructor").map(x => {
            if (typeof (this[x]) === "function")
                this[x] = this[x].bind(this);
        });
    }
    getChecked(id) {
        return this.state.checkedItems[id] === true;
    }
    changeChecked(id, value, oldState) {
        if (value !== true && value !== false) throw ('bad value' + value);
        var setting = {};
        setting[id] = value;
        var nextChecked = Object.assign({}, oldState, setting);
        return nextChecked;
    }
    onChange(e) {
        if (!e.id) {
            return;
        }
        var nextChecked = this.changeChecked(e.id, !this.getChecked(e.id), this.state.checkedItems);
        this.setState({ checkedItems: nextChecked, useMax: this.getChecked('special') });
    }

    render() {
        var bonusTotal = {da:0,oa:0,healthp:0,phys:0,cunn:0,spir:0,armora:0,consti:0,stund:0,piercer:0,ppiercer:0,chaosr:0,pchaosr:0,aetherr:0,paetherr:0,physd:0,bleedd:0,itd:0,coldd:0,pierced:0,energyrps:0,fpierced:0,bleedr:0,palld:0,firer:0,coldr:0,lightr:0,pelemr:0,bleedot:0,pbleedot:0,pbleedd:0,pas:0};
        var keys = Object.keys(bonusTotal);
        var incrementer = (d,k) => {
            //console.log('checking x for y', d, k);
          if(d[k] != null) bonusTotal[k] += d[k];
        };
        var allSets = window.allSets = tiers.reduce((acc,v) => acc.concat(v.sets),[]);
        var allDevos = window.allDevos = allSets.reduce((acc,v)=> acc.concat(v.values),[]);
        var checked = window.checked = allDevos.filter(d=> this.getChecked(d.id));

        checked.map(d =>keys.map(k => incrementer(d,k)));



        return (<div>
        <header className="navbar navbar-light bg-dan bd-navbar navbar-fixed-top">

            <div>
                <BonusNav oa={bonusTotal.oa} da={bonusTotal.da} healthp={bonusTotal.healthp} phys={bonusTotal.phys} cunn={bonusTotal.cunn} spir={bonusTotal.spir} armora={bonusTotal.armora} consti={bonusTotal.consti} stund={bonusTotal.stund} piercer={bonusTotal.piercer} ppiercer={bonusTotal.ppiercer} chaosr={bonusTotal.chaosr} pchaosr={bonusTotal.pchaosr} aetherr={bonusTotal.aetherr} paetherr={bonusTotal.paetherr} physd={bonusTotal.physd} bleedd={bonusTotal.bleedd} itd={bonusTotal.itd} coldd={bonusTotal.coldd} pierced={bonusTotal.pierced} energyrps={bonusTotal.energyrps} fpierced={bonusTotal.fpierced} bleedr={bonusTotal.bleedr} palld={bonusTotal.palld} firer={bonusTotal.firer} coldr={bonusTotal.coldr} lightr={bonusTotal.lightr} pelemr={bonusTotal.pelemr} bleedot={bonusTotal.bleedot} pbleedot={bonusTotal.pbleedot} pbleedd={bonusTotal.pbleedd} pas={bonusTotal.pas} />
            </div>
        </header>
        <div className="fluid-container">
            <u><b>Starting Constellation</b></u><br></br>
            {
                tiers.map(t =>
                    <div key={t.tier} className="panel border col">
                        <div>Tier {t.tier}</div>
                        {t.sets.map(ds => <SetDisplay key={ds.title} title={ds.title} values={ds.values} onChange={this.onChange} getChecked={this.getChecked} />)}
                    </div>
                )
            }

        </div>
        </div>)
    }
}



ReactDOM.render(<Devotes />, document.getElementById("app"));