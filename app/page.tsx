'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target, Shield, DollarSign, Users, CheckCircle, Zap } from 'lucide-react';

const VELaunchPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const NerdioLogo = ({ size = 'small' }) => {
    if (size === 'large') {
      return (
        <img 
          src="https://i.imgur.com/yJwNF7X.png" 
          alt="Nerdio" 
          style={{height: 'clamp(50px, 6vh, 80px)', width: 'auto', maxWidth: '300px'}}
        />
      );
    }
    return (
      <img 
        src="https://i.imgur.com/a3ALtZD.png" 
        alt="Nerdio" 
        style={{height: 'clamp(24px, 2.5vh, 36px)', width: 'auto', maxWidth: '120px'}}
      />
    );
  };

  const slides = [
    {
      type: 'title',
      title: 'Value Engineering Launch',
      subtitle: 'Accelerating Competitive Wins in the EUC Market',
      date: 'October 9, 2025'
    },
    {
      type: 'team',
      title: 'Meet Your Value Engineering Team',
      members: [
        {
          name: 'Mohammed Irfan',
          role: 'Value Engineering Lead',
          expertise: ['15+ Years Full-Cycle Sales', '7+ Years EUC', 'Lakeside • Citrix • IBM'],
          superpower: 'Building value stories across the buyer journey'
        },
        {
          name: 'Mike Schweim',
          role: 'Value Engineering',
          expertise: ['Sales Acceleration', 'Pipeline Analytics', 'Deal Qualification'],
          superpower: 'Finding hidden buying signals'
        },
        {
          name: 'Toby Brown',
          role: 'Value Engineering',
          expertise: ['VMware/Citrix Migration', 'Risk Quantification', 'Multi-stakeholder Alignment'],
          superpower: 'Making 20-person committees say yes'
        }
      ]
    },
    {
      type: 'stats',
      title: 'The Current Reality',
      subtitle: 'We\'re Leaving Money on the Table',
      bigStats: [
        { value: '29%', label: 'Win Rate', sublabel: '71% of deals lost' },
        { value: '35%', label: 'Lost to Timeline', sublabel: 'Not competitor. Time.' },
        { value: '$8.2M', label: 'Pipeline at Risk', sublabel: 'Q4 competitive deals' }
      ],
      quote: '"Hope is not a strategy."'
    },
    {
      type: 'opportunity',
      title: 'The Window is NOW',
      bigNumber: '26,000',
      bigLabel: 'Target Accounts',
      stats: [
        { value: '5,000+', label: 'Active Buying Signals', highlight: true },
        { value: '$67K', label: 'Avg Deal Size MRR' },
        { value: '90 days', label: 'Renewal Window' }
      ],
      bullets: [
        'Citrix pricing: 50%+ increases, 90-day notice',
        'VMware exodus: 20%+ seeking alternatives',
        'Buying committees: 11-20 stakeholders',
        '83% migrations exceed budget'
      ]
    },
    {
      type: 'comparison',
      title: 'Traditional vs VE Engagement',
      left: {
        label: 'Before',
        items: [
          '"Azure is cheaper"',
          '"Our team costs $12/hr"',
          'TCO story fails',
          'Deal stalls 47 days',
          '"Let me think about it"',
          '29% win rate'
        ]
      },
      right: {
        label: 'With VE',
        items: [
          '"You\'re out of compliance"',
          '"Certification at risk"',
          'Quantify: $2M fine',
          'Timeline: 87-day path',
          '"When can we start?"',
          'Target: 50%+ win rate'
        ]
      }
    },
    {
      type: 'pillars',
      title: 'The VE Framework',
      subtitle: 'Three Value Levers',
      items: [
        { icon: 'dollar', value: '$500K', label: 'Avg 3-Year Savings', title: 'Save Money' },
        { icon: 'trending', value: '$1.2M', label: 'From Uptime Gains', title: 'Increase Revenue' },
        { icon: 'shield', value: '78%', label: 'Compliance Improvement', title: 'Reduce Risk' }
      ]
    },
    {
      type: 'tools',
      title: 'Tools We\'re Building',
      items: [
        { name: 'Reverse Timeline Calculator', status: 'MVP LIVE', impact: 'Eliminate risks' },
        { name: 'TCO Analysis Tool', status: 'Q4 Beta', impact: 'Creates impact conversations' },
        { name: 'RDS-To-AVD Migration Tool', status: 'Q4 Beta', impact: 'Quantify the move to AVD' }
      ]
    },
    {
      type: 'wins',
      title: 'Month One: Already Delivering',
      subtitle: 'Proof, Not Promises',
      items: [
        { account: 'NY IT Services', value: '$60K MRR', outcome: 'Q1 → Q4 acceleration' },
        { account: 'AB InBev', value: 'Enterprise', outcome: '30% MRR increase' },
        { account: '5 More Accounts', value: '$1.77M', outcome: 'Pipeline recovery' }
      ]
    },
    {
      type: 'roadmap',
      title: 'Beyond Competitive Deals',
      subtitle: 'The VE Roadmap 2026',
      columns: [
        { title: 'Sales Enablement', items: ['ROI calculators', 'Objection library', 'Battle cards'] },
        { title: 'Customer Success', items: ['Renewal value', 'Expansion scoring', 'QBR framework'] },
        { title: 'Partner Enablement', items: ['MSP profitability', 'TCO workshops', 'Co-selling value'] }
      ]
    },
    {
      type: 'cta',
      title: 'Q4 VE Engagement Slots',
      bigNumber: '10',
      bigLabel: 'Priority Slots Available',
      subtitle: 'First Come, First Served',
      left: ['Competitive deal', 'Min $40K MRR', 'Q4/Q1 close', 'Co-create value'],
      right: ['Deep qualification', 'Multi-stakeholder case', 'Tools & frameworks', 'Key meetings', 'Close faster & bigger']
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) nextSlide();
      else if (e.key === 'ArrowLeft' && currentSlide > 0) prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => { setCurrentSlide(currentSlide + 1); setIsTransitioning(false); }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => { setCurrentSlide(currentSlide - 1); setIsTransitioning(false); }, 300);
    }
  };

  const renderSlide = (slide: any) => {
    const baseStyle = {fontFamily: 'system-ui, -apple-system, sans-serif'};
    
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 py-8" style={baseStyle}>
            <div className="mb-6"><NerdioLogo size="large" /></div>
            <h1 style={{fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '20px', color: '#0F1729', lineHeight: '1.2', textAlign: 'center', maxWidth: '90%'}}>
              {slide.title}
            </h1>
            <p style={{fontSize: 'clamp(16px, 1.8vw, 24px)', color: '#64748B', marginBottom: '24px', textAlign: 'center', maxWidth: '85%', lineHeight: '1.4'}}>
              {slide.subtitle}
            </p>
            <div style={{fontSize: 'clamp(12px, 1.1vw, 16px)', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600'}}>
              {slide.date}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: '700', color: '#0F1729', marginBottom: 'clamp(12px, 1.8vh, 20px)', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <div className="flex flex-col gap-3 flex-1 overflow-hidden" style={{minHeight: 0}}>
              {slide.members?.map((member: any, i: number) => (
                <div key={i} style={{background: '#F8FAFC', borderRadius: '6px', padding: 'clamp(12px, 1.5vw, 18px)', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'row', gap: '14px', alignItems: 'flex-start', flex: '1', minHeight: 0}}>
                  <div style={{width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#0093B2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                    {member.name.charAt(0)}
                  </div>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '10px', flexWrap: 'wrap'}}>
                      <div>
                        <h3 style={{fontSize: 'clamp(15px, 1.4vw, 18px)', fontWeight: '700', color: '#0F1729', marginBottom: '3px', lineHeight: '1.2'}}>
                          {member.name}
                        </h3>
                        <div style={{fontSize: '10px', fontWeight: '600', color: '#0093B2', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                          {member.role}
                        </div>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                      <div style={{flex: '1', minWidth: '180px'}}>
                        <div style={{fontSize: '9px', color: '#94A3B8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600'}}>Expertise</div>
                        {member.expertise.map((exp: string, j: number) => (
                          <div key={j} style={{display: 'flex', alignItems: 'flex-start', marginBottom: '4px'}}>
                            <span style={{color: '#C5E86C', fontSize: '12px', marginRight: '5px', lineHeight: '1.3', flexShrink: 0}}>•</span>
                            <span style={{fontSize: 'clamp(10px, 0.9vw, 12px)', color: '#475569', lineHeight: '1.3'}}>{exp}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{flex: '1', minWidth: '180px'}}>
                        <div style={{fontSize: '9px', color: '#94A3B8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600'}}>Superpower</div>
                        <div style={{fontSize: 'clamp(11px, 1vw, 13px)', color: '#1E293B', fontStyle: 'italic', lineHeight: '1.3'}}>{member.superpower}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', color: '#0F1729', marginBottom: '6px', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <p style={{fontSize: 'clamp(13px, 1.4vw, 17px)', color: '#64748B', marginBottom: 'clamp(14px, 2.5vh, 22px)', flexShrink: 0}}>
              {slide.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 flex-1" style={{minHeight: 0}}>
              {slide.bigStats?.map((stat: any, i: number) => (
                <div key={i} style={{background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)', borderRadius: '8px', padding: 'clamp(16px, 2.2vw, 26px)', border: '3px solid #DC2626', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div style={{fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: '700', color: '#0F1729', marginBottom: '6px', lineHeight: '1'}}>
                    {stat.value}
                  </div>
                  <div style={{fontSize: 'clamp(13px, 1.3vw, 16px)', fontWeight: '600', color: '#1E293B', marginBottom: '3px'}}>
                    {stat.label}
                  </div>
                  <div style={{fontSize: 'clamp(10px, 1vw, 12px)', color: '#475569'}}>
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
            <div style={{background: '#F8FAFC', borderRadius: '8px', padding: 'clamp(14px, 2vw, 20px)', textAlign: 'center', border: '2px solid #0093B2', flexShrink: 0}}>
              <p style={{fontSize: 'clamp(15px, 1.6vw, 20px)', fontStyle: 'italic', color: '#1E293B', fontWeight: '300', lineHeight: '1.3', margin: 0}}>
                {slide.quote}
              </p>
            </div>
          </div>
        );

      case 'opportunity':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0F1729', marginBottom: 'clamp(16px, 2.5vh, 28px)', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 flex-shrink-0">
              <div style={{background: '#0093B2', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 28px)', textAlign: 'center', border: '3px solid #C5E86C', gridColumn: 'span 2'}}>
                <div style={{fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: '700', color: 'white', marginBottom: '8px', lineHeight: '1'}}>
                  {slide.bigNumber}
                </div>
                <div style={{fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: '600', color: 'white'}}>
                  {slide.bigLabel}
                </div>
              </div>
              {slide.stats?.map((stat: any, i: number) => (
                <div key={i} style={{background: stat.highlight ? '#0093B2' : '#F8FAFC', borderRadius: '10px', padding: 'clamp(14px, 1.8vw, 22px)', textAlign: 'center', border: `2px solid ${stat.highlight ? '#C5E86C' : '#E2E8F0'}`, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div style={{fontSize: 'clamp(26px, 3.8vw, 44px)', fontWeight: '700', color: stat.highlight ? 'white' : '#0F1729', marginBottom: '5px', lineHeight: '1'}}>
                    {stat.value}
                  </div>
                  <div style={{fontSize: 'clamp(11px, 1.1vw, 13px)', fontWeight: '600', color: stat.highlight ? 'white' : '#475569', lineHeight: '1.2'}}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(14px, 2vw, 24px)', border: '2px solid #0093B2', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column'}}>
              <h3 style={{fontSize: 'clamp(14px, 1.6vw, 18px)', fontWeight: '700', color: '#0F1729', marginBottom: '12px', flexShrink: 0}}>Market Catalysts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1" style={{minHeight: 0}}>
                {slide.bullets?.map((bullet: string, i: number) => (
                  <div key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                    <Zap size={16} style={{color: '#C5E86C', marginRight: '8px', flexShrink: 0, marginTop: '2px'}} />
                    <span style={{fontSize: 'clamp(11px, 1.1vw, 14px)', color: '#475569', lineHeight: '1.3'}}>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0F1729', marginBottom: 'clamp(16px, 2.5vh, 28px)', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1" style={{minHeight: 0}}>
              <div style={{background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 50%)', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 28px)', border: '3px solid #DC2626', display: 'flex', flexDirection: 'column', minHeight: 0}}>
                <h3 style={{fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: '700', color: '#0F1729', marginBottom: '16px', flexShrink: 0}}>
                  {slide.left.label}
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, minHeight: 0, overflow: 'hidden'}}>
                  {slide.left.items.map((item: string, i: number) => (
                    <div key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{color: '#DC2626', fontSize: '20px', fontWeight: '700', marginRight: '8px', lineHeight: '1', flexShrink: 0}}>×</span>
                      <span style={{fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#1E293B', lineHeight: '1.3'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%)', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 28px)', border: '3px solid #C5E86C', display: 'flex', flexDirection: 'column', minHeight: 0}}>
                <h3 style={{fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: '700', color: '#0F1729', marginBottom: '16px', flexShrink: 0}}>
                  {slide.right.label}
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, minHeight: 0, overflow: 'hidden'}}>
                  {slide.right.items.map((item: string, i: number) => (
                    <div key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                      <CheckCircle size={18} style={{color: '#0093B2', marginRight: '8px', flexShrink: 0, marginTop: '2px'}} />
                      <span style={{fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#1E293B', lineHeight: '1.3'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'pillars':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0F1729', marginBottom: '8px', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <p style={{fontSize: 'clamp(13px, 1.5vw, 18px)', color: '#64748B', marginBottom: 'clamp(16px, 2.5vh, 28px)', flexShrink: 0}}>
              {slide.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1" style={{minHeight: 0}}>
              {slide.items?.map((item: any, i: number) => {
                const Icon = item.icon === 'dollar' ? DollarSign : item.icon === 'trending' ? TrendingUp : Shield;
                return (
                  <div key={i} style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 28px)', border: '2px solid #0093B2', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{width: '56px', height: '56px', borderRadius: '10px', backgroundColor: '#0093B2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px'}}>
                      <Icon size={32} color="white" />
                    </div>
                    <h3 style={{fontSize: 'clamp(15px, 1.6vw, 18px)', fontWeight: '700', color: '#0F1729', marginBottom: '12px'}}>
                      {item.title}
                    </h3>
                    <div style={{fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: '700', color: '#C5E86C', marginBottom: '8px', lineHeight: '1'}}>
                      {item.value}
                    </div>
                    <p style={{fontSize: 'clamp(12px, 1.2vw, 14px)', color: '#475569', fontWeight: '500', lineHeight: '1.3', margin: 0}}>
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', color: '#0F1729', marginBottom: 'clamp(16px, 2.5vh, 28px)', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, minHeight: 0}}>
              {slide.items?.map((item: any, i: number) => (
                <div key={i} style={{background: '#F8FAFC', borderRadius: '8px', padding: 'clamp(14px, 1.8vw, 22px)', border: '2px solid #0093B2', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0}}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px'}}>
                    <h3 style={{fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: '700', color: '#0F1729', margin: 0}}>
                      {item.name}
                    </h3>
                    <span style={{background: '#C5E86C', color: '#0F1729', padding: '3px 10px', borderRadius: '14px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em'}}>
                      {item.status}
                    </span>
                  </div>
                  <div style={{fontSize: 'clamp(11px, 1.1vw, 13px)', color: '#475569', display: 'flex', alignItems: 'center'}}>
                    <Target size={15} style={{color: '#0093B2', marginRight: '7px', flexShrink: 0}} />
                    {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wins':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0F1729', marginBottom: '8px', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <p style={{fontSize: 'clamp(13px, 1.5vw, 18px)', color: '#64748B', marginBottom: 'clamp(16px, 2.5vh, 28px)', flexShrink: 0}}>
              {slide.subtitle}
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, minHeight: 0}}>
              {slide.items?.map((item: any, i: number) => (
                <div key={i} style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 28px)', border: `3px solid ${i === 0 ? '#C5E86C' : '#0093B2'}`, flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px'}}>
                    <h3 style={{fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: '700', color: '#0F1729', margin: 0}}>
                      {item.account}
                    </h3>
                    <div style={{fontSize: 'clamp(20px, 2.8vw, 32px)', fontWeight: '700', color: '#C5E86C'}}>
                      {item.value}
                    </div>
                  </div>
                  <p style={{fontSize: 'clamp(13px, 1.5vw, 17px)', color: '#475569', fontWeight: '600', margin: 0}}>
                    → {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'roadmap':
        return (
          <div className="h-full overflow-hidden" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0F1729', marginBottom: '8px', letterSpacing: '-0.02em', flexShrink: 0}}>
              {slide.title}
            </h2>
            <p style={{fontSize: 'clamp(13px, 1.5vw, 18px)', color: '#64748B', marginBottom: 'clamp(16px, 2.5vh, 28px)', flexShrink: 0}}>
              {slide.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1" style={{minHeight: 0}}>
              {slide.columns?.map((col: any, i: number) => (
                <div key={i} style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 26px)', border: '2px solid #0093B2', display: 'flex', flexDirection: 'column', minHeight: 0}}>
                  <h3 style={{fontSize: 'clamp(16px, 1.7vw, 19px)', fontWeight: '700', color: '#0F1729', marginBottom: '16px', flexShrink: 0}}>
                    {col.title}
                  </h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '11px', flex: 1, minHeight: 0, overflow: 'hidden'}}>
                    {col.items.map((item: string, j: number) => (
                      <div key={j} style={{display: 'flex', alignItems: 'flex-start'}}>
                        <CheckCircle size={17} style={{color: '#C5E86C', marginRight: '8px', flexShrink: 0, marginTop: '2px'}} />
                        <span style={{fontSize: 'clamp(12px, 1.15vw, 14px)', color: '#475569', lineHeight: '1.3'}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="h-full overflow-hidden flex flex-col justify-center" style={{...baseStyle, padding: 'clamp(52px, 7vh, 72px) clamp(16px, 2vw, 32px) clamp(12px, 2vh, 24px)'}}>
            <h2 style={{fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '700', color: '#0F1729', textAlign: 'center', marginBottom: '14px', letterSpacing: '-0.02em'}}>
              {slide.title}
            </h2>
            <div style={{textAlign: 'center', marginBottom: '28px'}}>
              <div style={{fontSize: 'clamp(44px, 6.5vw, 72px)', fontWeight: '700', color: '#0093B2', lineHeight: '1', marginBottom: '8px'}}>
                {slide.bigNumber}
              </div>
              <div style={{fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: '600', color: '#C5E86C'}}>
                {slide.bigLabel}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full mb-5">
              <div style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 26px)', border: '2px solid #0093B2'}}>
                <h3 style={{fontSize: 'clamp(16px, 1.7vw, 19px)', fontWeight: '700', color: '#0F1729', marginBottom: '14px'}}>
                  Deal Criteria
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '9px'}}>
                  {slide.left?.map((item: string, i: number) => (
                    <div key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                      <CheckCircle size={16} style={{color: '#C5E86C', marginRight: '8px', flexShrink: 0, marginTop: '2px'}} />
                      <span style={{fontSize: 'clamp(12px, 1.15vw, 14px)', color: '#475569', lineHeight: '1.3'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{background: '#F8FAFC', borderRadius: '10px', padding: 'clamp(16px, 2.2vw, 26px)', border: '2px solid #C5E86C'}}>
                <h3 style={{fontSize: 'clamp(16px, 1.7vw, 19px)', fontWeight: '700', color: '#0F1729', marginBottom: '14px'}}>
                  What You Get
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '9px'}}>
                  {slide.right?.map((item: string, i: number) => (
                    <div key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                      <Zap size={16} style={{color: '#C5E86C', marginRight: '8px', flexShrink: 0, marginTop: '2px'}} />
                      <span style={{fontSize: 'clamp(12px, 1.15vw, 14px)', color: '#475569', lineHeight: '1.3'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', color: '#C5E86C', marginBottom: '8px'}}>
                Reach out to Mike-Toby-Mohammed
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="relative bg-white shadow-2xl" style={{
        width: '100vw',
        height: '56.25vw',
        maxHeight: '100vh',
        maxWidth: '177.78vh',
      }}>
        <div className="absolute top-3 right-3 z-50" style={{pointerEvents: 'none'}}>
          <div style={{background: '#0093B2', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: 'clamp(11px, 1.1vw, 14px)', fontWeight: '700', fontFamily: 'system-ui, -apple-system, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <div className="absolute top-3 left-3 z-50" style={{pointerEvents: 'none'}}>
          <NerdioLogo size="small" />
        </div>

        <div className={`w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderSlide(slides[currentSlide])}
        </div>

        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
            currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 opacity-80 hover:opacity-100'
          }`}
          style={{background: '#0093B2', color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 40}}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
            currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 opacity-80 hover:opacity-100'
          }`}
          style={{background: '#0093B2', color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 40}}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 h-1" style={{background: '#0093B2', width: `${((currentSlide + 1) / slides.length) * 100}%`, transition: 'width 300ms'}} />
      </div>
    </div>
  );
};

export default VELaunchPresentation;
